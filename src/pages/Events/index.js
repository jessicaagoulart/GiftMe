import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import database from "../../config/firebaseconfig";
import styles from "./style";
import Cabecalho from "../../components/Cabecalho";
import Event from "../../components/Event";
import { useStore } from "../../store";
import Button from "../../components/Button";
import { Search } from "react-native-feather";
import { Frown } from "react-native-feather";

export default function Events({ navigation }) {
	const [store] = useStore();
	const [events, setEvents] = useState([]);
	const [filteredEvents, setFilteredEvents] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		database.collection("Eventos").onSnapshot((query) => {
			const list = [];
			query.forEach((doc) => {
				list.push({ ...doc.data(), id: doc.id });
			});
			setEvents(list);
			setFilteredEvents(list);
		});
	}, []);

	function searchFilter(text) {
		if (text) {
			// DATA FOR EVENT TITLE
			const newData = events.filter((item) => {
				const itemData = item.eventTitle
					? item.eventTitle.toUpperCase()
					: "".toUpperCase();
				const textData = text.toUpperCase();
				return itemData.indexOf(textData) > -1;
			});
			// DATA FOR USERNAME
			const newUserData = events.filter((item) => {
				const itemData = item.userName
					? item.userName.toUpperCase()
					: "".toUpperCase();
				const textData2 = text.toUpperCase();
				return itemData.indexOf(textData2) > -1;
			});

			// CONCATENATION FOR NEWDATA AND NEWUSERDATA AND DELETE DUPLICATED
			const arrayConcat = newData.concat(newUserData);
			for (let i = 0; i < arrayConcat.length; ++i) {
				for (let j = i + 1; j < arrayConcat.length; ++j) {
					if (arrayConcat[i] === arrayConcat[j]) arrayConcat.splice(j--, 1);
				}
			}

			setFilteredEvents(() => arrayConcat);
			setSearch(text);
		} else {
			setFilteredEvents(() => events);
			setSearch(text);
		}
	}

	return (
		<View style={styles.container}>
			<Cabecalho title="Eventos" />

			{/* SEARCH INPUT */}
			<View style={styles.containerSearch}>
				<TextInput
					placeholder="Busque um evento"
					style={styles.searchInput}
					placeholderTextColor="#fff"
					value={search}
					onChangeText={(text) => searchFilter(text)}
					underlineColorAndroid="transparent"
				/>
				<TouchableOpacity>
					<Search stroke="#FFEAEC" />
				</TouchableOpacity>
			</View>

			{/* MESSAGE IF NO EVENTS FILTERED */}
			{filteredEvents.length === 0 && (
				<View style={styles.containerMessage}>
					<Text style={styles.textMessage}>Nenhum evento encontrado</Text>
					<Frown stroke="#888" />
				</View>
			)}

			{/* EVENTS */}
			<FlatList
				showsVerticalScrollIndicator={false}
				data={filteredEvents}
				renderItem={(item) => {
					return <Event {...item} />;
				}}
				keyExtractor={(item) => item.id}
				ListFooterComponent={<View style={{ padding: 60 }} />}
			/>

			{/* ADD NEW EVENT BUTTON */}
			<Button
				name="plus"
				color="#fff"
				size={20}
				onPress={() => navigation.navigate("NewEvent", { userId: store.auth })}
			/>
		</View>
	);
}
