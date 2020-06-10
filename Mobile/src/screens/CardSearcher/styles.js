import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  description: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginLeft: 11,
  },
  cardImage: {
    marginLeft: 131,
  },

  cardDescription: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  search: {
    marginTop: "1%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
