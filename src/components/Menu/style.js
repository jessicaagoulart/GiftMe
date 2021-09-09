import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: -45,
		right: 0,
		zIndex: 1,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		color: "#333",
	},
	menu: {
		zIndex: 999,
		margin: 25,
		marginTop: 70,
	},
	open: {
		height: windowHeight + 100,
		position: "absolute",
		zIndex: 1,
		right: 0,
		top: 0,
		maxHeight: "100%",
		paddingTop: 105,
		paddingLeft: 10,
		width: 200,
		backgroundColor: "#EF476F",
		color: "#fff",
	},
	close: {
		height: windowHeight + 100,
		width: 0,
		maxWidth: "0%",
	},
	item: {
		fontSize: 15,
		paddingHorizontal: 10,
		margin: 3,
		color: "#fff",
	},
});

export default styles;
