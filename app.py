import numpy as np
import streamlit as st
import seaborn as sns
from PIL import Image
from torchvision import transforms, models
import torch
import os
import pandas as pd
import torch.nn as nn
import matplotlib.pyplot as plt

# Load the model
@st.cache_data()
def load_model(model_path):
    try:
        model = models.vgg16(pretrained=True)
        num_classes = 3  
        model.classifier[6] = nn.Linear(4096, num_classes)
        model.load_state_dict(torch.load(model_path, map_location='cpu'))
        model.to("cpu")
        model.eval()
        return model
    except Exception as e:
        st.error(f"Error loading the model: {str(e)}")
        return None

# Make a prediction
def make_prediction(model, processed_img):
    probs = model(processed_img)
    probs = probs.softmax(1)
    probs, idxs = torch.sort(probs, descending=True)
    return probs, idxs

# Display the probabilities for each prediction
def display_predictions(probs, idxs, class_labels):
    labels = []
    st.write(f"Predicted amount of blood loss: {class_labels[idxs[0]]}")
    #st.write("Probability: {probs[0]}")
    st.write("Probabilities of prediction:")
    for i in range(len(probs)):
        class_label = class_labels[idxs[i]]
        labels.append(class_label)
        st.write(f"- {class_label}: {probs[i]:.2f}")
   
    # Create a DataFrame for Seaborn plotting
    df = pd.DataFrame({
        'Probability': probs,
        'Class': labels
    })

    # Create a figure object
    fig, ax = plt.subplots(figsize=(4, 2))

    # Horizontal Bar plot using Seaborn
    barplot = sns.barplot(x='Probability', y="Class", data=df, palette='viridis', ax=ax)

    # Add title
    ax.set_title('Blood Loss Amount')
    
    # Display the plot
    st.pyplot(fig)



# Style the title with HTML and CSS
st.markdown(
    """
    <div style="text-align: center; padding: 18px;">
        <h1 style="color: #5e5e5e; font-size: 33px; font-weight: bold;">
            🩸 Classification of Menstrual Blood Loss 🌸
        </h1>
    </div>
    """,
    unsafe_allow_html=True
)


# Upload image through Streamlit
uploaded_file = st.file_uploader("Upload an image of your menstrual pad.", type=["jpg", "png", "jpeg"])

if uploaded_file is not None:
    # Display the image
    image = Image.open(uploaded_file)

    # Ensure the image has 3 channels
    image = image.convert("RGB")

    st.image(image, caption="Uploaded Image.")#, use_column_width=True)
  
    # Load model
    model_path = os.path.join(os.getcwd(), "model_fold_1.pth")
    model = load_model(model_path)
    
    if model is not None:
        # Preprocess the image
        preprocess = transforms.Compose([
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
        ])
        processed_img = preprocess(image).unsqueeze(0)  # Add batch dimension

        # Classification
        probs, idxs = make_prediction(model, processed_img)

        # Display predictions
        class_labels = ["Low", "Medium", "High"]  # class labels
        display_predictions(probs[0].detach().numpy(), idxs[0].detach().numpy(), class_labels)