import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bgd,
		paddingTop: 45,
	},
	containerMessage: {
		paddingHorizontal: 20,
		paddingVertical: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	textMessage: {
		color: "#888",
		marginRight: 10,
		fontSize: 16,
	},
});

export default styles;
