import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, FlatList, Text } from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style";
import Cabecalho from "../../components/Cabecalho";
import Event from "../../components/Event";
import { useStore } from "../../store";
import IconButton from "../../components/IconButton";
import { Frown } from "react-native-feather";

export default function MyEvents({ navigation }) {
	const [store] = useStore();
	const [events, setEvents] = useState([]);
	const mountedRef = useRef(true);

	const fetchSpecificItem = useCallback(async () => {
		try {
			database.collection("Eventos").onSnapshot((query) => {
				const list = [];

				query.forEach((doc) => {
					if (doc.data().userId === store.auth) {
						list.push({ ...doc.data(), id: doc.id });
					}
				});

				if (!mountedRef.current) return null;
				setEvents(list);
			});
		} catch (error) {}
	}, [mountedRef]);

	useEffect(() => {
		fetchSpecificItem();
		return () => {
			mountedRef.current = false; // clean up function
		};
	}, [fetchSpecificItem]); // add function as dependency

	return (
		<View style={styles.container}>
			<Cabecalho title="Meus Eventos" goBack />

			{events.length === 0 && (
				<View style={styles.containerMessage}>
					<Text style={styles.textMessage}>
						Você não possui evento cadastrado
					</Text>
					<Frown stroke="#888" />
				</View>
			)}

			<FlatList
				showsVerticalScrollIndicator={false}
				data={events}
				renderItem={(item) => {
					return <Event {...item} />;
				}}
				keyExtractor={(item) => item.id}
				ListFooterComponent={<View style={{ padding: 60 }} />}
			/>

			<IconButton
				name="plus"
				color="#fff"
				size={20}
				onPress={() => navigation.navigate("NewEvent", { userId: store.auth })}
			/>
		</View>
	);
}
