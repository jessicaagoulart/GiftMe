import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Events from "./src/pages/Events";
import Edit from "./src/pages/Edit";
import NewEvent from "./src/pages/NewEvent";
import EventDetails from "./src/pages/EventDetails";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={Login}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Register"
					component={Register}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Events"
					component={Events}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="NewEvent"
					component={NewEvent}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="EditEvent"
					component={Edit}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="EventDetails"
					component={EventDetails}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
