import React from "react";
import { View, Image } from "react-native";
import { icons } from "../../utils/icons";

export default function Images({ icon }) {
	function imagem(type) {
		return icons[type];
	}

	const src = imagem(icon);

	return <Image source={src} />;
}
