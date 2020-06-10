import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1%",
  },

  center: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    marginBottom: "5%",
  },

  childCenter1: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "5%",
    marginTop: "5%",
  },

  childCenter2: {
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: "5%",
    marginTop: "5%",
  },
  childOfchild: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  childOfchild2: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  columManas: {
    alignItems: "center",
  },
});

export default styles;
