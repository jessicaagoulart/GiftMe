import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bgd,
		paddingTop: 45,
	},
	containerForm: {
		marginTop: 20,
		paddingHorizontal: 40,
	},
	myEvent: {
		width: "100%",
		fontSize: 20,
		marginBottom: 20,
		marginTop: 10,
		color: "#444",
		fontWeight: "600",
	},
	deleteButton: {
		width: 140,
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		alignSelf: "flex-end",
		marginHorizontal: 40,
	},
	textDelete: {
		fontSize: 15,
		color: "#555",
	},
	textButton: {
		color: "#fff",
		padding: 10,
		textAlign: "center",
	},
	input: {
		width: "100%",
		borderBottomColor: colors.mainPink,
		borderBottomWidth: 1,
		padding: 10,
		height: 40,
		fontSize: 15,
	},

	label: {
		width: "100%",
		fontSize: 16,
		marginBottom: 15,
		color: "#444",
		fontWeight: "600",
		textAlign: "center",
	},
	title: {
		color: "#444",
		marginVertical: 10,
		fontWeight: "600",
		fontSize: 18,
		marginTop: 20,
	},
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
	plusItems: {
		backgroundColor: colors.mainPink,
		marginTop: 30,
		paddingVertical: 10,
		borderRadius: 20,
		marginHorizontal: 40,
	},
	plusItemsText: {
		color: "#fff",
		textAlign: "center",
		fontWeight: "700",
	},
	giftsImg: {
		width: 90,
		height: 90,
		margin: 10,
		resizeMode: "contain",
	},
	giftItem: {
		padding: 15,
		margin: 10,
		width: 150,
		height: 190,
		borderRadius: 10,
		backgroundColor: colors.bgd,
		justifyContent: "center",
		alignItems: "center",
	},
	giftItemPressed: {
		padding: 15,
		margin: 10,
		width: 150,
		height: 190,
		borderRadius: 10,
		backgroundColor: colors.bgd,
		justifyContent: "center",
		alignItems: "center",
		elevation: 5,
		borderColor: colors.mainPink,
		borderWidth: 2,
	},
	giftTitle: {
		width: 120,
		fontSize: 17,
		color: "#666",
		marginBottom: 5,
		textAlign: "center",
	},
	giftPrice: {
		fontSize: 15,
		fontWeight: "700",
		color: "#666",
		textAlign: "center",
	},
	stepTwo: {
		paddingTop: 15,
		flex: 1,
		width: "100%",
	},
});

export default styles;
