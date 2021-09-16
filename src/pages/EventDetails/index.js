import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import Cabecalho from "../../components/Cabecalho/index.js";
import EventInfo from "../../components/EventInfo/index.js";
import firebase from "firebase";
import { useStore } from "../../store.js";
import produtos from "../../utils/produtos.js";
import { Heart } from "react-native-feather";
import database from "../../config/firebaseconfig";
import Button from "../../components/Button/index.js";
import styles from "./style.js";
import MyModal from "../../components/MyModal";

export default function EventDetails({ navigation, route }) {
	const {
		eventTitle,
		userName,
		icon,
		userId,
		id,
		avaiableGifts,
		unavaiableGifts,
	} = route.params;
	const [store] = useStore();
	const [giftItems, setGiftItems] = useState();
	const [avaiable, setAvaiable] = useState(avaiableGifts);
	const [unavaiable, setUnavaiable] = useState(unavaiableGifts);
	const [disabled, setDisabled] = useState(false);
	const [isModalVisible, setModalVisible] = useState(false);
	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	useEffect(() => {
		if (giftItems) {
			database
				.collection("Eventos")
				.doc(id)
				.update({
					avaiableGifts: firebase.firestore.FieldValue.arrayRemove(giftItems),
					unavaiableGifts: firebase.firestore.FieldValue.arrayUnion(giftItems),
				});
		}
	}, [updateGifts]);

	function updateGifts() {
		setDisabled(() => true);

		console.log("gift:", giftItems);
		console.log("unavaiableItems:", unavaiable);
		avaiableGifts.splice(avaiableGifts.indexOf(giftItems), 1);

		setAvaiable(() => avaiableGifts);

		if (unavaiableGifts === undefined) {
			setUnavaiable([giftItems]);
		} else {
			setUnavaiable((prev) => [...prev, giftItems]);
		}

		setModalVisible(!isModalVisible);
	}

	// ORDENAR PRODUTOS DISPONIVEIS PRIMEIRO
	function sortData() {
		let sortedProductsArray = [];
		produtos.forEach((produto) =>
			avaiable.includes(produto.id)
				? (sortedProductsArray = [produto, ...sortedProductsArray])
				: sortedProductsArray.push(produto)
		);
		return sortedProductsArray;
	}

	return (
		<View style={styles.container}>
			<Cabecalho title="Detalhes do Evento" goBack />
			<EventInfo title={eventTitle} userName={userName} icon={icon} />

			<Text style={styles.title}>Lista de desejo de presentes</Text>

			{/* SHOW MESSAGE IF NO AVAIABLE GIFTS */}
			{avaiable.length == 0 && (
				<Text style={styles.label}>
					Ops... Esse evento não possui mais presentes disponíveis para enviar.
				</Text>
			)}

			<FlatList
				showsVerticalScrollIndicator={false}
				data={sortData()}
				keyExtractor={(item) => item.id.toString()}
				ListFooterComponent={<View style={{ height: 100 }} />}
				renderItem={({ item }) => {
					if (
						(unavaiable && unavaiable.includes(item.id)) ||
						(avaiable && avaiable.includes(item.id))
					) {
						return (
							<TouchableOpacity
								activeOpacity={0.7}
								disabled={
									store.auth == userId ||
									(unavaiable && unavaiable.includes(item.id))
										? true
										: false
								}
								style={
									unavaiable && unavaiable.includes(item.id)
										? styles.disabled
										: styles.item
								}
								key={item.id}
								onPress={() => {
									if (store.auth != userId) {
										giftItems == item.id
											? setGiftItems(() => null)
											: setGiftItems(() => item.id);
									}
								}}
							>
								<Image style={styles.imagem} source={item.url} />
								<View>
									<Text numberOfLines={1} style={styles.nomeProduto}>
										{item.name}
									</Text>
									<Text style={styles.precoProduto}>R${item.price}</Text>
								</View>

								{/* SHOW HEART ICON IF USER IS NOT EVENT ORGANIZER */}
								{store.auth != userId ? (
									avaiableGifts && avaiableGifts.includes(item.id) ? (
										<Heart
											stroke="#EF476F"
											fill={giftItems == item.id ? "#EF476F" : "#fff"}
											width={25}
											height={25}
										/>
									) : (
										<></>
									)
								) : (
									<></>
								)}
							</TouchableOpacity>
						);
					}
				}}
			/>

			{/* EDIT BUTTON */}
			{store.auth == userId && (
				<Button
					onPress={() => {
						navigation.navigate("EditEvent", {
							id: id,
							name: eventTitle,
							userName: userName,
							avaiableGifts: avaiable,
							unavaiableGifts: unavaiable,
						});
					}}
					name="edit"
					color="#fff"
					size={20}
					disabled={false}
				/>
			)}

			{/* GIFT BOTAO */}
			{store.auth != userId && !disabled && avaiable.length != 0 && (
				<Button
					onPress={() => updateGifts(giftItems)}
					name="gift"
					color="#fff"
					size={20}
					disabled={false}
				/>
			)}

			{/* DISABLE GIFT BUTTON */}
			{((store.auth != userId && disabled && avaiable.length != 0) ||
				(store.auth != userId &&
					(giftItems == null || giftItems == undefined) &&
					avaiable.length != 0)) && (
				<Button name="gift" color="#fff" size={20} disabled={true} />
			)}

			{/* MODAL  */}
			<MyModal
				title="Voce acabou de reservar um presente"
				isVisible={isModalVisible}
				onPress1={() => {
					setDisabled(() => false);
					setGiftItems(null);
					setModalVisible(!isModalVisible);
				}}
				button="Ok"
				onBackdropPress={toggleModal}
			/>
		</View>
	);
}
