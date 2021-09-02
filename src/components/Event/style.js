import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	eventTitle: {
		width: "100%",
		alignContent: "flex-start",
		color: "#444",
		padding: 40,
		fontSize: 20,
		borderRadius: 20,
	},
	contentEvent: {
		width: "100%",
		backgroundColor: "#eee",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
		paddingVertical: 10,
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
