import React, { useState, useEffect } from "react";
import {
	Text,
	TouchableOpacity,
	KeyboardAvoidingView,
	Animated,
	StyleSheet,
} from "react-native";
import animation from "../../assets/animation/animation.json";
import PasswordInput from "../../components/PasswordInput";
import EmailInput from "../../components/EmailInput";
import Toast from "react-native-toast-message";
import Lottie from "lottie-react-native";
import firebase from "firebase";
import styles from "./style";

export default function Register({ navigation }) {
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [fade, setFade] = useState(true);

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
	}, [registerFirebase]);

	function registerFirebase() {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				setError(false);
				let user = userCredential.user;
				Toast.show({
					type: "success",
					position: "bottom",
					text1: "Sucesso",
					text2: "Conta cadastrada com sucesso",
					visibilityTime: 1000,
				});
				navigation.navigate("Login");
			})
			.catch((error) => {
				let errorCode = error.code;
				console.log(error.code);
				setError(true);
				switch (errorCode) {
					case "auth/weak-password":
						setMessage("Senha precisa de no mínimo 6 caracteres");
						break;
					case "auth/email-already-in-use":
						setMessage("Não foi possível cadastrar esse email");
						break;
					case "auth/invalid-email":
						setMessage("Email inválido");
						break;
					default:
						break;
				}
			});
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			{fade && (
				<Animated.View style={[styles2.fadingContainer]}>
					<Lottie autoSize resizable="contain" source={animation} autoPlay />
				</Animated.View>
			)}
			{!fade && (
				<>
					<Text style={styles.title}>Cadastre-se</Text>
					<EmailInput
						type="text"
						placeholder="Digite seu email"
						onChangeText={setEmail}
						value={email}
					/>
					<PasswordInput
						type="text"
						style={styles.input}
						placeholder="Digite uma senha"
						onChangeText={setPassword}
						value={password}
						maxLength={30}
					/>
					<PasswordInput
						type="text"
						style={styles.input}
						placeholder="Confirme sua senha"
						onChangeText={setPasswordConfirmation}
						value={passwordConfirmation}
						maxLength={30}
					/>
					<TouchableOpacity
						activeOpacity={0.7}
						style={styles.buttonContainer}
						onPress={() => {
							if (password == "" || email == "") {
								setError(true);
								setMessage("Os campos são obrigatórios");
							} else if (password != passwordConfirmation) {
								setError(true);
								setMessage("As senhas precisam ser iguais");
							} else {
								setError(false);
								registerFirebase();
							}
						}}
					>
						<Text style={styles.textButton}>Cadastrar</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate("Login")}
					>
						<Text style={styles.link}>Já possuo cadastro</Text>
					</TouchableOpacity>
				</>
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
