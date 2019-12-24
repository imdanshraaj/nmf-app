import { StyleSheet } from "react-native";
import colors from "../../style/colors";

export default StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    flex: 1
  },
  tabItem: {
    flex: 1,
    borderBottomColor: colors.gray,
    borderBottomWidth: 4,
  },
  tabItemSelected: {
    flex: 1,
    borderBottomColor: colors.linkGreen,
    borderBottomWidth: 4,
  }
});
