import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#cd853f",
    marginLeft: "5%",
    marginRight: "5%",
    paddingBottom: "5%",
    borderRadius: 20,
  },

  containerView: {
    flexDirection: "row",
    alignItems: "center",
  },

  columnView: {
    flexDirection: "column",
    alignItems: "center",
  },
  checkBoxView: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  rowView1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginLeft: 40,
  },

  rowView2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
  },
});

export default styles;
