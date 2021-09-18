import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const styles = StyleSheet.create({
	container: {
		height: "100%",
		marginTop: 10,
		flex: 1,
	},
	input: {
		width: "100%",
		borderBottomColor: colors.mainPink,
		borderBottomWidth: 1,
		padding: 10,
		height: 40,
		fontSize: 15,
		marginBottom: 10,
	},

	label: {
		width: "100%",
		fontSize: 17,
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
	containerStepsButton: {
		width: "100%",
		justifyContent: "space-between",
		flexDirection: "row",
		paddingBottom: 20,
		paddingHorizontal: 40,
	},
	step: {
		flex: 1,
		paddingHorizontal: 40,
	},
	step: {
		flex: 1,
		paddingHorizontal: 40,
	},
	stepThree: {
		paddingVertical: 15,
		flex: 1,
		width: "100%",
	},
	stepFour: {
		paddingHorizontal: 40,
		paddingVertical: 15,
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		width: "100%",
	},
	giftsImg: {
		width: 90,
		height: 90,
		margin: 10,
		resizeMode: "contain",
	},
	giftItem: {
		padding: 15,
		margin: 10,
		width: 150,
		height: 190,
		borderRadius: 10,
		backgroundColor: colors.bgd,
		justifyContent: "center",
		alignItems: "center",
	},
	giftItemPressed: {
		elevation: 5,
		borderColor: colors.mainPink,
		borderWidth: 2,
	},
	giftTitle: {
		width: 120,
		fontSize: 17,
		color: "#666",
		marginBottom: 5,
		textAlign: "center",
	},
	giftPrice: {
		fontSize: 15,
		fontWeight: "700",
		color: "#666",
		textAlign: "center",
	},

	saveButton: {
		width: 120,
		height: 40,
		backgroundColor: colors.mainPink,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		marginTop: 30,
	},
});

export default styles;
