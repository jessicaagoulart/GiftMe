import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 45,
	},
	containerForm: {
		paddingHorizontal: 40,
		marginTop: 20,
	},
	myEvent: {
		width: "100%",
		fontSize: 20,
		marginBottom: 20,
		marginTop: 10,
		color: "#444",
		fontWeight: "600",
	},
	saveButton: {
		width: 70,
		height: 35,
		backgroundColor: "#EF476F",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		marginTop: 25,
	},
	textButton: {
		color: "#fff",
	},
	input: {
		width: "100%",
		borderBottomColor: "#EF476F",
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
});

export default styles;
