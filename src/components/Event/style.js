import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	contentEvent: {
		width: "95%",
		backgroundColor: "#eee",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginTop: 10,
		paddingVertical: 10,
		alignSelf: "center",
		borderRadius: 20,
	},
	containerDescription: {
		alignItems: "flex-start",
		marginLeft: 20,
		width: 200,
	},
	eventTitle: {
		width: "100%",
		color: "#444",
		fontSize: 18,
		marginBottom: 5,
	},
	eventOrganizer: {
		width: "100%",
		color: "#444",
		fontSize: 15,
	},
	containerIcons: {
		backgroundColor: colors.bgd,
		justifyContent: "center",
		alignContent: "center",
		borderRadius: 100,
		padding: 15,
		marginLeft: 20,
	},
});

export default styles;
