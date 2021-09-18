import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	DefaultButton: {
		width: 120,
		height: 50,
		backgroundColor: colors.mainPink,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		marginBottom: 10,
	},
	textButton: {
		color: "#fff",
		margin: 5,
	},
	containerText: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default styles;