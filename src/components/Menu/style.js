import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../utils/colors";

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
		backgroundColor: colors.mainPink,
		color: "#fff",
		flex: 1,
	},
	close: {
		height: windowHeight + 100,
		width: 0,
		maxWidth: "0%",
	},
	item: {
		fontSize: 18,
		paddingHorizontal: 10,
		margin: 3,
		marginVertical: 8,
		color: "#fff",
	},
	user: {
		color: "#fff",
		fontSize: 14,
		width: 150,
		marginTop: windowHeight - 200,
		marginLeft: 10,
	},
});

export default styles;
