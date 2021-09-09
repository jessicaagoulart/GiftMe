import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Images from "../Images";

export default function EventInfo({ title, userName, icon }) {
	return (
		<View style={styles.container}>
			<View style={styles.contentEvent}>
				<View style={styles.containerIcons}>
					<Images icon={icon} />
				</View>
				<View style={styles.containerDescription}>
					<Text numberOfLines={1} style={styles.eventTitle}>
						{title}
					</Text>
					<Text numberOfLines={1} style={styles.eventOrganizer}>
						Organizador: {userName}
					</Text>
				</View>
			</View>
		</View>
	);
}
