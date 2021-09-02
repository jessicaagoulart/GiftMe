import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Images from "../../components/Images";

export default function Event({ navigation, item }) {
	return (
		<View style={styles.contentEvent}>
			<View style={styles.containerIcons}>
				<Images icon={item.icon} />
			</View>
			<Text
				style={styles.eventTitle}
				onPress={() => {
					navigation.navigate("EventDetails", {
						id: item.id,
						name: item.name,
					});
				}}
			>
				{item.name}
			</Text>
		</View>
	);
}
