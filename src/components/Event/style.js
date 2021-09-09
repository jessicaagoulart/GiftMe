import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	contentEvent: {
		width: "100%",
		backgroundColor: "#eee",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 10,
		paddingVertical: 10,
	},
	containerDescription: {
		alignItems: "flex-start",
		marginLeft: 20,
		width: 220,
	},
	eventTitle: {
		width: "100%",
		color: "#444",
		fontSize: 20,
		marginBottom: 5,
	},
	eventOrganizer: {
		width: "100%",
		color: "#444",
		fontSize: 15,
	},
	containerIcons: {
		backgroundColor: "#fff",
		justifyContent: "center",
		alignContent: "center",
		borderRadius: 100,
		padding: 15,
		marginLeft: 20,
	},
});

export default styles;
