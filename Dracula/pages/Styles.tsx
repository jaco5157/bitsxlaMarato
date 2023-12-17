import { StyleSheet } from 'react-native';

const primary = "#fc003b";
const secondary = "#a90028";
const black = "#232121";
const white = "white";

const colors = {
    primary,
    secondary,
    black,
    white
}

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        backgroundColor: primary,
        color: white,
        fontSize: "18px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative"
    },
    mainContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    highlight: {
      fontWeight: '500',
      color: primary
    },
    input: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 12,
      paddingTop: 12,
      borderRadius: 30,
      backgroundColor: colors.black,
      width: "100%",
      color: colors.white
    },
    button: {
      padding: 15,
      borderRadius: 30,
      outline: "none",
      border: "none",
      textTransform: "uppercase",
      cursor: "pointer",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    logo: {
        width: 50,
        height: 50
    },
    bottomWave: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "black"
    }
});

export default styles;
export {colors};
