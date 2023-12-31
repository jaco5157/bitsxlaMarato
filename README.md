# bitsxlaMarato - Dracula

Table of Contents :bookmark_tabs:
=================
- [Overview](#overview)
- [Mobile App for Period Flow Tracking]()
- [Web Application for Classification of Menstrual Blood Loss]()
  - [Steps to Use the Application](#steps-to-Use-the-application)
  - [Model Used](#model-used)
  - [Installation](#installation)
  - [Code and Resources Used](#code-and-resources-used)


## Overview
In the scope of BitxlaMarato, we developed a mobile application for period tracking and to answer the PBAC survey. Furthermore, we developed a simple web demo with using PyTorch and Streamlit to showcase an image classification model for menstrual blood loss.

## Mobile App for Period Flow Tracking 🌸
We developed a mobile application for period tracking and to answer the PBAC survey.

### Login
![Login](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/33c979bc-ec7f-43f5-9712-c846b5bdbdef)

### Period tracking
![start cycle](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/334cef53-bfb1-41cf-92e1-d0d8dd6b70d4)
![Cycle started](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/5d05d868-c068-46d8-aaa9-9f7d1d508db4)


### Questionnaire
![Questionnaire](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/e5ff3d0c-97e4-45b1-953e-794786a59539)

### PBAC Score
<img width="229" alt="PBAC-score-test-q4" src="https://github.com/jaco5157/bitsxlaMarato/assets/74814020/fc9f45ef-6e30-4be7-a97a-1752e8b44888">
<img width="228" alt="PBAC-score-testq3" src="https://github.com/jaco5157/bitsxlaMarato/assets/74814020/25de5068-6a90-48b8-a9dc-6e8af689e34e">

### Additional features
![Stats](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/240faa75-d5d2-4f66-ba9f-d6366b265716)


## Web Application for Classification of Menstrual Blood Loss 🩸
Furthermore, we developed a simple web demo with using PyTorch and Streamlit to showcase an image classification model for menstrual blood loss.

![cnn](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/b2b780f4-66e7-45d6-b153-f8ceb957b397)

### Steps to Use the Application
- Clone the repository onto your own local machine
![repo](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/d4369ac8-e24a-4af9-afab-cfd68d01a17d)

- Open command prompt/terminal in the cloned repository (WebApp folder)

![image](https://user-images.githubusercontent.com/45563371/102073585-7b274e00-3e3e-11eb-8656-a67df96b995a.png)

- Run pip install -r requirements.txt

![image](https://user-images.githubusercontent.com/45563371/102073729-af9b0a00-3e3e-11eb-95f4-d02d01b6fa76.png)

- Type ‘streamlit run app.py’ in the command prompt/terminal

- A localhost address should automatically open in your web browser. If not, copy the local URL from the command prompt/terminal into your web browser.

![image](https://user-images.githubusercontent.com/45563371/102073842-dbb68b00-3e3e-11eb-8e7e-0f67e0021b38.png)

- Click 'Browse files' and upload an image file in jpg, jpeg or png format

![input_example](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/956b7972-abac-4664-8adb-5cf8312816de)

- Now just wait for the results. The predictions should be outputted from highest probability to lowest probability.

![input_prediction](https://github.com/jaco5157/bitsxlaMarato/assets/74814020/549938e1-f889-47ff-84b8-c95def82091c)

### Model Used
We use VGG-16, a pre-trained network, since our dataset is small and artificial.
#### VGG-16
VGG-16 is a convolutional neural network that is 101 layers deep. You can load a pretrained version of the network trained on more than a million images from the ImageNet database. The pretrained network can classify images into 1000 object categories, such as keyboard, mouse, pencil, and many animals.

### Installation
```
pip install -r requirements.txt
```

### Code and Resources Used
- Python: Version 3.11.4
- Main Packages: PIL, torchvision, torch, streamlit

