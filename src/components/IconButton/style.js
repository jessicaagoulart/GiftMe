import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	editButton: {
		backgroundColor: colors.mainPink,
		position: "absolute",
		bottom: 30,
		left: 20,
		width: 60,
		height: 60,
		borderRadius: 30,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default styles;
