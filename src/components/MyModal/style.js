import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	modal: {
		backgroundColor: "#eee",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
	},
	textModal: {
		fontSize: 20,
		color: "#222",
		textAlign: "center",
		marginVertical: 20,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 10,
	},
	buttonModal: {
		backgroundColor: colors.mainPink,
		width: 70,
		marginHorizontal: 5,
		borderRadius: 20,
	},
	textButton: {
		color: "#fff",
		padding: 10,
		textAlign: "center",
	},
});

export default styles;
