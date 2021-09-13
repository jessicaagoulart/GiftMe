import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 45,
	},
	containerForm: {
		flex: 1,
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
	deleteButton: {
		width: 140,
		height: 40,
		paddingHorizontal: 10,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		marginTop: 25,
		alignSelf: "flex-end",
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
		backgroundColor: "#EF476F",
		width: 70,
		marginHorizontal: 5,
		borderRadius: 20,
	},
});

export default styles;
