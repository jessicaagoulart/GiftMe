import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import styles from "./style";
import firebase from "firebase";

export default function Register({ navigation }) {
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	function registerFirebase() {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				setError(false);
				let user = userCredential.user;

				navigation.navigate("Login");
			})
			.catch((error) => {
				let errorCode = error.code;
				setError(true);
				switch (errorCode) {
					case "auth/weak-password":
						setMessage("Senha precisa de no mínimo 6 caracteres");
					case "auth/email-already-in-use":
						setMessage("Não foi possível cadastrar esse email");
					case "auth/invalid-email":
						setMessage("Email inválido");
				}
			});
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
			<Text style={styles.title}>Cadastre-se</Text>
			<TextInput
				type="text"
				style={styles.input}
				placeholder="Digite um email"
				onChangeText={setEmail}
				value={email}
			></TextInput>
			<TextInput
				type="text"
				secureTextEntry={true}
				style={styles.input}
				placeholder="Digite uma senha"
				onChangeText={setPassword}
				value={password}
				maxLength={30}
			></TextInput>
			<TextInput
				type="text"
				secureTextEntry={true}
				style={styles.input}
				placeholder="Confirme sua senha"
				onChangeText={setPasswordConfirmation}
				value={passwordConfirmation}
				maxLength={30}
			></TextInput>

			<View style={{ height: 30 }}>
				{error && <ErrorMessage message={message} />}
			</View>

			<TouchableOpacity
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

			<TouchableOpacity onPress={() => navigation.navigate("Login")}>
				<Text style={styles.link}>Já possuo cadastro</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}
