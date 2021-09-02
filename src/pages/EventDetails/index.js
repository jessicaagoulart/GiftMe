import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	SafeAreaView,
	ScrollView,
} from "react-native";
import styles from "./style.js";
import { Feather } from "@expo/vector-icons";
import Cabecalho from "../../components/Cabecalho/index.js";
import EventInfo from "../../components/EventInfo/index.js";

export default function EventDetails({ navigation, route }) {
	const eventTitle = route.params.name;
	const idEvent = route.params.id;

	return (
		<SafeAreaView style={styles.container}>
			<Cabecalho title="Detalhes do Evento" />
			<EventInfo title={eventTitle} />

			<TouchableOpacity
				style={styles.editButton}
				onPress={() => {
					navigation.navigate("EditEvent", {
						id: idEvent,
						name: eventTitle,
					});
				}}
			>
				<Feather name="edit" color="#fff" size={20} />
			</TouchableOpacity>
		</SafeAreaView>
	);
}
