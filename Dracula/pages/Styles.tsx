import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    highlight: {
      fontWeight: '700',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
      width: '100%',
    },
    buttonStyle: {
      width: '80%',
      marginTop: 8,
      marginHorizontal: '10%',
    },
});

export default styles;