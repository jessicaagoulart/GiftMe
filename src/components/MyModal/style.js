import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	modal: {
		backgroundColor: "#eee",
		borderRadius: 20,
		alignItems: "center",
		justifyContent: "center",
		height: 250,
		position: "relative",
		justifyContent: "space-between",
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
	buttonCancel: {
		backgroundColor: colors.buttonColor,
		width: 150,
		marginHorizontal: 5,
		borderRadius: 20,
	},
	buttonDelete: {
		backgroundColor: colors.buttonWhite,
		width: 150,
		marginHorizontal: 5,
		borderRadius: 30,
	},
	textButtonCancel: {
		color: "#fff",
		padding: 10,
		textAlign: "center",
	},
	textButtonDelete: {
		color: colors.mainPink,
		padding: 10,
		textAlign: "center",
	},
	dangerous: {
		height: 100,
		backgroundColor: colors.mainPink,
		width: "100%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	sucess: {
		height: 100,
		backgroundColor: colors.mainPink,
		width: "100%",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default styles;
