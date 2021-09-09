import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
import { StoreProvider, useStore } from "./store";
import Events from "./pages/Events";
import Edit from "./pages/Edit";
import NewEvent from "./pages/NewEvent";
import EventDetails from "./pages/EventDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Stack = createStackNavigator();

export default function App() {
	const Router = () => {
		const [store] = useStore();

		if (!store.rehydrated) {
			return (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator color="#EF476F" size="large" />
				</View>
			);
		}

		return store.auth ? (
			<Stack.Navigator initialRouteName="Events">
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
		) : (
			<Stack.Navigator initialRouteName="Events">
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
			</Stack.Navigator>
		);
	};
	return (
		<StoreProvider>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</StoreProvider>
	);
}
