import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.bgd,
	},
	title: {
		fontSize: 45,
		fontWeight: "bold",
		color: colors.mainPink,
		marginBottom: 30,
	},
	input: {
		height: 50,
		width: 300,
		fontSize: 15,
		borderBottomColor: colors.mainPink,
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	buttonContainer: {
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.mainPink,
		padding: 15,
		marginTop: 20,
		borderRadius: 30,
	},
	textButton: {
		fontSize: 18,
		color: "#fff",
	},
	link: {
		color: "#444",
		fontSize: 15,
		marginTop: 25,
	},
	rememberMe: {
		flexDirection: "row",
		marginTop: 5,
		justifyContent: "space-between",
		width: 300,
	},
	textRememberMe: {
		fontSize: 15,
		color: "#444",
	},
});

export default styles;
