import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Dices: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "10%",
    marginRight: "10%",
  },

  uniqueDice: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  rollDice: {
    marginTop: -20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
