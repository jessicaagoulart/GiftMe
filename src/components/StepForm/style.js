import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		height: "100%",
		marginTop: 10,
		paddingHorizontal: 40,
	},
	label: {
		width: "100%",
		fontSize: 16,
		marginBottom: 20,
		color: "#444",
		fontWeight: "600",
		textAlign: "center",
	},
	title: {
		color: "#444",
		marginVertical: 20,
		fontWeight: "600",
		fontSize: 18,
	},
	icones: {
		margin: 10,
		padding: 10,
		borderRadius: 30,
	},
	myIcon: {
		width: 100,
		height: 100,
		backgroundColor: "#eee",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100,
		marginBottom: 20,
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
	containerStepsButton: {
		width: "100%",
		justifyContent: "space-between",
		flexDirection: "row",
		marginBottom: 20,
	},
	stepButton: {
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
});

export default styles;
