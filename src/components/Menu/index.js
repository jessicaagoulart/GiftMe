import React, { useState } from "react";
import { View, Text, TouchableOpacity as TouchableMenu } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../auth";
import { useNavigation } from "@react-navigation/core";
import { colors } from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);
	const [, { logout }] = useAuth();
	const navigation = useNavigation();
	const [email, setEmail] = useState("");

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem("@gift_user");
			if (value !== null) {
				setEmail(() => value);
			}
		} catch (e) {
			// error reading value
		}
	};

	getData();

	return (
		<View style={styles.container}>
			<TouchableMenu style={styles.menu} onPress={() => setIsOpen(!isOpen)}>
				{!isOpen ? (
					<Feather name="menu" size={25} color={colors.mainPink} />
				) : (
					<Feather name="x" size={25} color="#fff" />
				)}
			</TouchableMenu>

			<View style={isOpen ? styles.open : styles.close}>
				<TouchableOpacity
					onPress={() => {
						{
							setIsOpen(!isOpen);
							navigation.navigate("Events");
						}
					}}
				>
					<Text style={isOpen ? styles.item : styles.close}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setIsOpen(!isOpen);
						navigation.navigate("MyEvents");
					}}
				>
					<Text style={isOpen ? styles.item : styles.close}>Meus eventos</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => logout()}>
					<Text style={isOpen ? styles.item : styles.close}>Logout</Text>
				</TouchableOpacity>

				<Text numberOfLines={1} style={styles.user}>
					{email}
				</Text>
			</View>
		</View>
	);
}
