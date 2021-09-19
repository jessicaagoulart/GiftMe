import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Animated,
	StyleSheet,
	Switch,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import animation from "../../assets/animation/animation.json";
import PasswordInput from "../../components/PasswordInput";
import EmailInput from "../../components/EmailInput";
import Toast from "react-native-toast-message";
import Lottie from "lottie-react-native";
import { useAuth } from "../../auth";
import firebase from "firebase";
import styles from "./style";
import { colors } from "../../utils/colors";

export default function Login({ navigation }) {
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [, { login }] = useAuth();
	const [fade, setFade] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);

	useEffect(() => {
		setError(false);
		setTimeout(() => {
			setFade(false);
		}, 1800);
	});

	useEffect(() => {
		if (error) {
			Toast.show({
				type: "error",
				position: "bottom",
				text1: "Falha",
				text2: message,
				visibilityTime: 1000,
			});
		}
	}, [loginFirebase]);

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
			if (rememberMe === true) {
				rememberUser();
			} else {
				forgetUser();
			}

			firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then((userCredential) => {
					let user = userCredential.user;
					login(user.uid);
					storeData(user.email);
					Toast.show({
						type: "success",
						position: "bottom",
						text1: "Sucesso!",
						text2: "Login realizado com sucesso",
						visibilityTime: 1000,
					});
					navigation.navigate("Events", { userId: user.uid });
				})
				.catch((error) => {
					let errorCode = error.code;
					setError(true);
					setMessage("Verifique seu email ou senha");
				});
		}
	}

	function toggleRememberMe() {
		setRememberMe(() => !rememberMe);
	}

	async function rememberUser() {
		try {
			await AsyncStorage.setItem("@gift_userRemember", email);
		} catch (error) {
			console.log(error);
		}
	}

	async function forgetUser() {
		try {
			await AsyncStorage.removeItem("@gift_userRemember");
		} catch (error) {
			console.log(error);
		}
	}

	async function getRememberedUser() {
		try {
			const username = await AsyncStorage.getItem("@gift_userRemember");
			if (username !== null) {
				return username;
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getRememberedUser().then((username) => {
			setEmail(() => username || "");
			setRememberMe(() => (username ? true : false));
		});
	}, []);

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

					<EmailInput
						type="text"
						placeholder="Digite seu email"
						onChangeText={setEmail}
						value={email}
					/>

					<PasswordInput
						type="text"
						placeholder="Digite sua senha"
						onChangeText={setPassword}
						value={password}
						maxLength={30}
					/>

					{/* REMEMBER ME SWITCH */}
					<View style={styles.rememberMe}>
						<Text style={styles.textRememberMe}>Lembrar de mim</Text>
						<Switch
							value={rememberMe}
							onValueChange={toggleRememberMe}
							thumbColor={colors.mainPink}
							trackColor={{ false: "#E1E5F2", true: colors.secondPink }}
						/>
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
