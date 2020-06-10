import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 4,
  },

  childView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default styles;
