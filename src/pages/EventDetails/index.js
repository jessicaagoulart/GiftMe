import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import styles from "./style.js";
import { Feather } from "@expo/vector-icons";
import Cabecalho from "../../components/Cabecalho/index.js";
import EventInfo from "../../components/EventInfo/index.js";
import { useStore } from "../../store.js";
import produtos from "../../utils/produtos.js";
import { Heart } from "react-native-feather";
import database from "../../config/firebaseconfig";

export default function EventDetails({ navigation, route }) {
	const {
		eventTitle,
		userName,
		icon,
		userId,
		idEvent,
		gifts,
		avaiableGifts,
		unavaiableGifts,
	} = route.params;

	const [store] = useStore();
	const [giftItems, setGiftItems] = useState();
	const [avaiable, setAvaiable] = useState(avaiableGifts);
	const [unavaiable, setUnavaiable] = useState(unavaiableGifts);
	const [disabled, setDisabled] = useState(false);

	function updateGifts(gift) {
		// setDisabled(() => true);

		avaiableGifts.splice(avaiableGifts.indexOf(gift), 1);

		setAvaiable(() => avaiableGifts);

		if (unavaiableGifts == undefined) {
			setUnavaiable(() => [gift]);
		} else {
			setUnavaiable((prev) => [...prev, gift]);
		}

		console.log(`--------atualizado--------`);
		console.log("unavaiable dentro da funcao: ", unavaiable);

		database.collection("Eventos").doc(idEvent).update({
			avaiableGifts: avaiableGifts,
			unavaiableGifts: unavaiable,
		});
	}

	console.log("unavaiable fora da funcao: ", unavaiable);

	return (
		<View style={styles.container}>
			<Cabecalho title="Detalhes do Evento" />
			<EventInfo title={eventTitle} userName={userName} icon={icon} />

			<Text style={styles.title}>Lista de desejo de presentes</Text>

			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.giftsContainer}
			>
				{produtos.map((produto) => {
					return (
						avaiable.includes(produto.id) && (
							<TouchableOpacity
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

								<TouchableOpacity>
									<Heart
										stroke="#EF476F"
										fill={giftItems == produto.id ? "#EF476F" : "#fff"}
										width={25}
										height={25}
									/>
								</TouchableOpacity>
							</TouchableOpacity>
						)
					);
				})}
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

			{/* BOTAO EDITAR */}
			{store.auth == userId && (
				<TouchableOpacity
					style={styles.editButton}
					onPress={() => {
						navigation.navigate("EditEvent", {
							id: idEvent,
							name: eventTitle,
							userName: userName,
						});
					}}
				>
					<Feather name="edit" color="#fff" size={20} />
				</TouchableOpacity>
			)}

			{/* BOTAO PRESENTEAR */}
			{store.auth != userId && !disabled && (
				<TouchableOpacity
					style={styles.editButton}
					onPress={() => updateGifts(giftItems)}
				>
					<Feather name="gift" color="#fff" size={20} />
				</TouchableOpacity>
			)}

			{store.auth != userId && disabled && (
				<TouchableOpacity disabled style={styles.editButton}>
					<Feather name="gift" color="#fff" size={20} />
				</TouchableOpacity>
			)}
		</View>
	);
}
