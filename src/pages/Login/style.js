import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 45,
		fontWeight: "bold",
		color: "#EF476F",
		marginBottom: 30,
	},
	input: {
		height: 50,
		width: 300,
		fontSize: 15,
		borderBottomColor: "#EF476F",
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	buttonContainer: {
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#EF476F",
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
});

export default styles;
