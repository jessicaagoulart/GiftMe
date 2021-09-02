import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
} from "react-native";
import database from "../../config/firebaseconfig";
import { Feather } from "@expo/vector-icons";
import styles from "./style";

import Cabecalho from "../../components/Cabecalho";
import Event from "../../components/Event";

export default function Events({ navigation }) {
	const [events, setEvents] = useState([]);

	// function deleteEvent(id) {
	// 	database.collection("Eventos").doc(id).delete();
	// }

	useEffect(() => {
		database.collection("Eventos").onSnapshot((query) => {
			const list = [];
			query.forEach((doc) => {
				list.push({ ...doc.data(), id: doc.id });
			});
			setEvents(list);
		});
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				style={styles.FlatList}
				showsVerticalScrollIndicator={false}
				data={events}
				renderItem={(item) => {
					return <Event {...item} navigation={navigation} />;
				}}
				keyExtractor={(item) => item.id}
				ListHeaderComponent={<Cabecalho title="Eventos" />}
				ListFooterComponent={<View style={{ padding: 60 }} />}
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("NewEvent")}
			>
				<Text style={styles.plus}>+</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}
