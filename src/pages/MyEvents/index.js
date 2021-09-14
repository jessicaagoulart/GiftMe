import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style";
import Cabecalho from "../../components/Cabecalho";
import Event from "../../components/Event";
import { useStore } from "../../store";
import Button from "../../components/Button";

export default function MyEvents({ navigation }) {
	const [store] = useStore();

	const [events, setEvents] = useState([]);

	useEffect(() => {
		database.collection("Eventos").onSnapshot((query) => {
			const list = [];

			query.forEach((doc) => {
				if (doc.data().userId === store.auth) {
					list.push({ ...doc.data(), id: doc.id });
				}
			});
			setEvents(list);
		});
	}, []);

	return (
		<View style={styles.container}>
			<Cabecalho title="Meus Eventos" />
			<FlatList
				showsVerticalScrollIndicator={false}
				data={events}
				renderItem={(item) => {
					return <Event {...item} />;
				}}
				keyExtractor={(item) => item.id}
				ListFooterComponent={<View style={{ padding: 60 }} />}
			/>

			<Button
				name="plus"
				color="#fff"
				size={20}
				onPress={() => navigation.navigate("NewEvent", { userId: store.auth })}
			/>
		</View>
	);
}
