import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import Cabecalho from "../../components/Cabecalho/index.js";
import EventInfo from "../../components/EventInfo/index.js";
import firebase from "firebase";
import { useStore } from "../../store.js";
import produtos from "../../utils/produtos.js";
import { Heart } from "react-native-feather";
import database from "../../config/firebaseconfig";
import Button from "../../components/Button/index.js";
import styles from "./style.js";

export default function EventDetails({ navigation, route }) {
	const {
		eventTitle,
		userName,
		icon,
		userId,
		id,
		gifts,
		avaiableGifts,
		unavaiableGifts,
	} = route.params;
	const [store] = useStore();
	const [giftItems, setGiftItems] = useState();
	const [avaiable, setAvaiable] = useState(avaiableGifts);
	const [unavaiable, setUnavaiable] = useState(unavaiableGifts);
	const [disabled, setDisabled] = useState(false);

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

	function updateGifts(gift) {
		setDisabled(() => true);

		avaiableGifts.splice(avaiableGifts.indexOf(gift), 1);

		setAvaiable(() => avaiableGifts);

		if (unavaiableGifts === undefined) {
			setUnavaiable([gift]);
		} else {
			setUnavaiable((prev) => [...prev, gift]);
		}
	}

	return (
		<View style={styles.container}>
			<Cabecalho title="Detalhes do Evento" />
			<EventInfo title={eventTitle} userName={userName} icon={icon} />

			<Text style={styles.title}>Lista de desejo de presentes</Text>

			{avaiable.length == 0 && (
				<Text style={styles.label}>
					Ops... Esse evento não possui mais presentes disponíveis para enviar.
				</Text>
			)}

			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.giftsContainer}
			>
				{produtos.map((produto) => {
					return (
						avaiable.includes(produto.id) && (
							<TouchableOpacity
								activeOpacity={store.auth == userId ? 1 : 0.2}
								style={styles.item}
								key={produto.id}
								onPress={() => {
									giftItems == produto.id
										? setGiftItems(() => null)
										: setGiftItems(() => produto.id);
								}}
							>
								<Image style={styles.imagem} source={produto.url} />
								<View>
									<Text numberOfLines={1} style={styles.nomeProduto}>
										{produto.name}
									</Text>
									<Text style={styles.precoProduto}>R${produto.price}</Text>
								</View>

								{/* SHOW HEART ICON IF USER IS NOT EVENT ORGANIZER */}
								{store.auth != userId && (
									<TouchableOpacity>
										<Heart
											stroke="#EF476F"
											fill={giftItems == produto.id ? "#EF476F" : "#fff"}
											width={25}
											height={25}
										/>
									</TouchableOpacity>
								)}
							</TouchableOpacity>
						)
					);
				})}

				{/* SHOW UNAVAIABLE GIFTS */}
				{unavaiable != undefined &&
					produtos.map((produto) => {
						return (
							unavaiable.includes(produto.id) && (
								<View style={styles.itemDisable} key={produto.id}>
									<Image style={styles.imagem} source={produto.url} />
									<View>
										<Text numberOfLines={1} style={styles.nomeProduto}>
											{produto.name}
										</Text>
										<Text style={styles.precoProduto}>R${produto.price}</Text>
									</View>
								</View>
							)
						);
					})}
				<View style={{ height: 100 }} />
			</ScrollView>

			{/* EDIT BUTTON */}
			{store.auth == userId && (
				<Button
					onPress={() => {
						navigation.navigate("EditEvent", {
							id: id,
							name: eventTitle,
							userName: userName,
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
					giftItems == undefined &&
					avaiable.length != 0)) && (
				<Button name="gift" color="#fff" size={20} disabled={true} />
			)}
		</View>
	);
}
