import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
		paddingTop: 20,
	},
	eventTitle: {
		fontSize: 20,
		marginLeft: 20,
		marginTop: 10,
	},
	editButton: {
		backgroundColor: "#EF476F",
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
});

export default styles;
