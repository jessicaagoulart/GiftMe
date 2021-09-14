import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import Images from "../../components/Images";
import { useNavigation } from "@react-navigation/core";

export default function Event({ item }) {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			activeOpacity={0.7}
			style={styles.contentEvent}
			onPress={() => {
				navigation.navigate("EventDetails", {
					id: item.id,
					eventTitle: item.eventTitle,
					userId: item.userId,
					userName: item.userName,
					icon: item.icon,
					gifts: item.gifts,
					avaiableGifts: item.avaiableGifts,
					unavaiableGifts: item.unavaiableGifts,
				});
			}}
		>
			<View style={styles.containerIcons}>
				<Images icon={item.icon} />
			</View>
			<View style={styles.containerDescription}>
				<Text numberOfLines={1} style={styles.eventTitle}>
					{item.eventTitle}
				</Text>
				<Text numberOfLines={1} style={styles.eventOrganizer}>
					Organizador: {item.userName}
				</Text>
			</View>
		</TouchableOpacity>
	);
}
