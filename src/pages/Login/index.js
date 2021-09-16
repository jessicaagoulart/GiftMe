import React from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Animated,
	StyleSheet,
	Easing,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useRef, useEffect } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import styles from "./style";
import firebase from "firebase";
import { useAuth } from "../../auth";
import Lottie from "lottie-react-native";
import animation from "../../assets/animation/animation.json";

export default function Login({ navigation }) {
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [, { login }] = useAuth();
	const [fade, setFade] = useState(true);

	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem("@gift_user", value);
		} catch (e) {
			// saving error
		}
	};

	function loginFirebase() {
		if (password == "" || email == "") {
			setError(true);
			setMessage("Os campos são obrigatórios");
		} else {
			setError(false);
			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((userCredential) => {
					let user = userCredential.user;
					login(user.uid);
					storeData(user.email);
					navigation.navigate("Events", { userId: user.uid });
				})
				.catch((error) => {
					let errorCode = error.code;
					setError(true);
					setMessage("Verifique seu email ou senha");
				});
		}
	}

	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		setTimeout(() => {
			setFade(false);
		}, 1800);
	});
	return (
		<KeyboardAvoidingView style={styles.container}>
			{fade && (
				<Animated.View style={[styles2.fadingContainer]}>
					<Lottie autoSize resizable="contain" source={animation} autoPlay />
				</Animated.View>
			)}

			{!fade && (
				<View style={styles.container}>
					<Text style={styles.title}>Gift Me</Text>

					<TextInput
						type="text"
						style={styles.input}
						placeholder="Digite seu email"
						onChangeText={setEmail}
						value={email}
					></TextInput>
					<TextInput
						type="text"
						secureTextEntry={true}
						style={styles.input}
						placeholder="Digite sua senha"
						onChangeText={setPassword}
						value={password}
						maxLength={30}
					></TextInput>

					<View style={{ height: 30 }}>
						{error && <ErrorMessage message={message} />}
					</View>

					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.buttonContainer}
						onPress={() => loginFirebase()}
					>
						<Text style={styles.textButton}>Logar</Text>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate("Register")}
					>
						<Text style={styles.link}>Cadastre-se</Text>
					</TouchableOpacity>
				</View>
			)}
		</KeyboardAvoidingView>
	);
}
const styles2 = StyleSheet.create({
	fadingContainer: {
		padding: 20,
		backgroundColor: "#fff",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
