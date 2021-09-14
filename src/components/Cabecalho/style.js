import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 20,
		paddingHorizontal: 40,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: colors.mainPink,
	},
});

export default styles;
