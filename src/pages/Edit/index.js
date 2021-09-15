import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Pressable,
	FlatList,
	Image,
} from "react-native";
import database from "../../config/firebaseconfig";
import styles from "./style.js";
import Cabecalho from "../../components/Cabecalho";
import ErrorMessage from "../../components/ErrorMessage";
import Button from "../../components/Button";
import { Trash } from "react-native-feather";
import produtos from "../../utils/produtos";
import MyModal from "../../components/MyModal";

export default function Edit({ navigation, route }) {
	const [eventTitleEdit, setEventTitleEdit] = useState(route.params.name);
	const [userNameEdit, setUserNameEdit] = useState(route.params.userName);
	const { avaiableGifts, unavaiableGifts } = route.params;
	const [error, setError] = useState(false);
	const idEvent = route.params.id;
	const [isModalVisible, setModalVisible] = useState(false);
	const [page, setPage] = useState(1);
	const [gifts, setGifts] = useState([]);
	const [newData, setNewData] = useState([]);

	useEffect(() => {
		console.log(route.params);
		console.log("unavaiableGifts antes: ", unavaiableGifts);
		console.log("avaiable antes: ", avaiableGifts);
		let list = [];
		for (let i = 0; i < produtos.length; i++) {
			if (!avaiableGifts.includes(produtos[i].id)) {
				list.push(produtos[i]);
			}
		}
		setNewData(list);
	}, []);

	function editEvent() {
		for (let i = 0; i < gifts.length; i++) {
			if (unavaiableGifts.includes(gifts[i])) {
				unavaiableGifts.splice(unavaiableGifts.indexOf(gifts[i]), 1);
			}
		}

		let newAvaiableArray = avaiableGifts.concat(gifts);

		database.collection("Eventos").doc(idEvent).update({
			eventTitle: eventTitleEdit,
			avaiableGifts: newAvaiableArray,
			unavaiableGifts: unavaiableGifts,
		});
		navigation.navigate("Events");
	}

	function deleteEvent() {
		database.collection("Eventos").doc(idEvent).delete();
		toggleModal();
		navigation.navigate("Events");
	}

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View style={styles.container}>
			<Cabecalho title="Editar Eventos" />

			{/* STEP ONE */}
			{page == 1 && (
				<View style={styles.containerForm}>
					<Text style={styles.title}>Nome do Evento</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite o nome do evento"
						onChangeText={setEventTitleEdit}
						onBlur={() => {
							if (userNameEdit == "" || eventTitleEdit == "") {
								setError(true);
							} else {
								setError(false);
							}
						}}
						value={eventTitleEdit}
					/>
					<Text style={styles.title}>Seu nome</Text>
					<TextInput
						style={styles.input}
						placeholder="Digite o seu nome"
						onChangeText={setUserNameEdit}
						onBlur={() => {
							if (userNameEdit == "" || eventTitleEdit == "") {
								setError(true);
							} else {
								setError(false);
							}
						}}
						value={userNameEdit}
					/>
				</View>
			)}

			{/* STEP TWO */}
			{page == 2 && (
				<View style={styles.stepTwo}>
					<Text style={styles.label}>
						Adicione mais itens a sua lista de presentes
					</Text>
					<FlatList
						contentContainerStyle={{
							alignItems: "center",
						}}
						ListFooterComponent={<View style={{ height: 50 }} />}
						showsVerticalScrollIndicator={false}
						numColumns={2}
						data={newData}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									activeOpacity={0.7}
									style={
										gifts.includes(item.id)
											? styles.giftItemPressed
											: styles.giftItem
									}
									onPress={() => {
										gifts.includes(item.id)
											? setGifts(gifts.filter((gift) => gift !== item.id))
											: setGifts((prev) => [...prev, item.id]);
									}}
								>
									<View>
										<Image style={styles.giftsImg} source={item.url} />
										<Text style={styles.giftTitle} numberOfLines={2}>
											{item.name}
										</Text>
										<Text style={styles.giftPrice}>R$ {item.price}</Text>
									</View>
								</TouchableOpacity>
							);
						}}
						keyExtractor={(item) => item.id}
					/>
				</View>
			)}

			{/* ADD ITEMS */}
			{page == 1 && (
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => setPage(() => 2)}
					style={styles.plusItems}
				>
					<Text style={styles.plusItemsText}>
						Adicionar mais item a lista de presente
					</Text>
				</TouchableOpacity>
			)}

			{/* ERROR MESSAGE */}
			<View style={{ height: 35 }}>
				{error && <ErrorMessage message="Campos obrigatórios" />}
			</View>

			{/* SAVE BUTTON */}
			<Button
				onPress={() => {
					if (userNameEdit == "" || eventTitleEdit == "") {
						setError(true);
					} else {
						editEvent();
					}
				}}
				name="save"
				size={25}
				color="#fff"
			/>

			{/* DELETE BUTTON */}

			{page == 1 && (
				<Pressable
					style={styles.deleteButton}
					onPress={toggleModal}
					name="trash"
					size={25}
					color="#fff"
				>
					<Text style={styles.textDelete}>Excluir Evento</Text>
					<Trash width={20} height={20} color="#555" strokeWidth={2} />
				</Pressable>
			)}

			{/* MODAL */}
			{page == 1 && (
				<MyModal
					title="Deseja excluir o evento?"
					isVisible={isModalVisible}
					onPress1={deleteEvent}
					onPress2={toggleModal}
					button="Sim"
					button2="Nao"
					onBackdropPress={toggleModal}
				/>
			)}
		</View>
	);
}
