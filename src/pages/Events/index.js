import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	SafeAreaView,
} from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style";
import Cabecalho from "../../components/Cabecalho";
import Event from "../../components/Event";
import { useStore } from "../../store";

export default function Events({ navigation, route }) {
	const [store] = useStore();

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
		<View style={styles.container}>
			<Cabecalho title="Eventos" />
			<FlatList
				showsVerticalScrollIndicator={false}
				data={events}
				renderItem={(item) => {
					return <Event {...item} />;
				}}
				keyExtractor={(item) => item.id}
				ListFooterComponent={<View style={{ padding: 60 }} />}
			/>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("NewEvent", { userId: store.auth })}
			>
				<Text style={styles.plus}>+</Text>
			</TouchableOpacity>
		</View>
	);
}
