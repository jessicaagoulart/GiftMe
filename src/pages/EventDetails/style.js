import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bgd,
		paddingTop: 45,
	},
	label: {
		marginBottom: 15,
		paddingHorizontal: 30,
		color: "#444",
	},
	title: {
		fontSize: 18,
		marginVertical: 15,
		paddingHorizontal: 30,
	},
	eventTitle: {
		fontSize: 20,
		marginLeft: 20,
		marginTop: 10,
	},
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
	textButton: {
		color: "#fff",
	},
	giftsContainer: {
		width: "100%",
		flex: 1,
		paddingBottom: 100,
	},
	item: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		marginVertical: 10,
		marginHorizontal: 10,
	},
	disabled: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: "100%",
		marginVertical: 10,
		marginHorizontal: 10,
		opacity: 0.6,
	},
	imagem: {
		width: 70,
		height: 70,
		marginHorizontal: 20,
		resizeMode: "contain",
	},
	nomeProduto: {
		fontSize: 18,
		width: 190,
		color: "#333",
		marginRight: 5,
	},
	precoProduto: {
		fontSize: 17,
		marginTop: 3,
		color: "#444",
	},
	buttonPresentear: {
		backgroundColor: colors.mainPink,
		width: 100,
		height: 40,
		justifyContent: "center",
		borderRadius: 20,
	},
	textPresentear: {
		color: "#fff",
		textAlign: "center",
	},
	heart: {
		backgroundColor: colors.bgd,
		alignItems: "center",
	},
	heartPressed: {
		backgroundColor: "#444",
	},
	itemDisable: {
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
		width: "90%",
		margin: 10,
		opacity: 0.5,
	},
});

export default styles;
