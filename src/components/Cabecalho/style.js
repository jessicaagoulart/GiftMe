import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 20,
		paddingRight: 40,
		paddingLeft: 20,
	},
	title: {
		fontSize: 25,
		marginLeft: 10,
		fontWeight: "bold",
		color: colors.mainPink,
	},
	containerInside: {
		flexDirection: "row",
		alignItems: "center",
	},
});

export default styles;
