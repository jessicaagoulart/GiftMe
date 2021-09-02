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

export default function Login({ navigation }) {
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function loginFirebase() {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((userCredential) => {
				let user = userCredential.user;
				navigation.navigate("Events");
			})
			.catch((error) => {
				let errorCode = error.code;
				setError(true);
				setMessage("Verifique seu email ou senha");
				console.log(errorCode);
			});
	}

	return (
		<KeyboardAvoidingView style={styles.container}>
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
				style={styles.buttonContainer}
				onPress={() => {
					if (password == "" || email == "") {
						setError(true);
						setMessage("Os campos são obrigatórios");
					} else {
						setError(false);
						loginFirebase();
					}
				}}
			>
				<Text style={styles.textButton}>Logar</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => navigation.navigate("Register")}>
				<Text style={styles.link}>Cadastre-se</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}
