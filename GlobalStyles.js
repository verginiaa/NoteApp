import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    marginBottom: 30,
    marginRight: 10,
  },
  g: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    backgroundColor: "#445161",
  },
  text: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    paddingLeft: 10,
    paddingTop: 10,
  },
  body: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
    alignItems: "flex-end",
  },
  textInp: {
    fontSize: 20,
    fontWeight: "300",
    color: "white",
    paddingLeft: 10,
    flex: 1,
  },
});
