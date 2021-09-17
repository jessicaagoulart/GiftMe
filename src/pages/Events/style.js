import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bgd,
		paddingTop: 45,
	},
	containerSearch: {
		marginHorizontal: 10,
		backgroundColor: colors.mainPink,
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginBottom: 10,
	},
	searchInput: {
		color: "#fff",
		maxWidth: 250,
	},
	containerMessage: {
		paddingHorizontal: 20,
		paddingVertical: 10,
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
