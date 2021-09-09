const produtos = [
	{
		id: 0,
		name: "Abajur",
		url: require("../assets/img/abajur.jpeg"),
		price: "79.90",
		description:
			"Que tal esse lindo abajur para iluminar a vida de alguem especial?",
	},
	{
		id: 1,
		name: "AirFryer",
		url: require("../assets/img/airfryer.jpeg"),
		price: "239.90",
		description: "Fazer um lanche rapido e saudavel quando for me visitar!",
	},
	{
		id: 2,
		name: "Conjunto de almofadas",
		url: require("../assets/img/almofadas.jpeg"),
		price: "69.90",
		description: "Deixar meu sofa mais bonito para te receber.",
	},
	{
		id: 3,
		name: "Armario",
		url: require("../assets/img/armario.jpeg"),
		price: "419.90",
		description: "Nada como organizar meus livros!",
	},
	{
		id: 4,
		name: "Aspirador de po",
		url: require("../assets/img/aspirador.jpeg"),
		price: "309.90",
		description: "Manter a casa sempre limpinha!",
	},
	{
		id: 5,
		name: "Conjunto de cabides",
		url: require("../assets/img/cabides.jpeg"),
		price: "45.90",
		description: "Preciso pendurar as roupas, ne?",
	},
	{
		id: 6,
		name: "Conjunto de cadeiras",
		url: require("../assets/img/cadeiras.jpeg"),
		price: "159.90",
		description: "Onde vamos sentar?",
	},
	{
		id: 7,
		name: "Cafeteira",
		url: require("../assets/img/cafeteira.jpeg"),
		price: "159.90",
		description: "Um bom cafezinho!",
	},
	{
		id: 8,
		name: "Cama de casal",
		url: require("../assets/img/cama.jpeg"),
		price: "1599.90",
		description: "Dormir e bom demais!",
	},
	{
		id: 9,
		name: "Conjunto de cestos",
		url: require("../assets/img/cestos.jpeg"),
		price: "199.90",
		description: "Bonitos ate para decorar.",
	},
	{
		id: 10,
		name: "Escorredor de louca",
		url: require("../assets/img/escorredor.jpeg"),
		price: "129.90",
		description: "Toda casa tem um escorredor",
	},
	{
		id: 11,
		name: "Conjunto de espatulas",
		url: require("../assets/img/espatulas.jpeg"),
		price: "29.90",
		description: "Hmmm... hamburguer na chapa! Precisa de espatula.",
	},
	{
		id: 12,
		name: "Estante",
		url: require("../assets/img/estante.jpeg"),
		price: "199.90",
		description: "Manter tudo organizado!",
	},
	{
		id: 13,
		name: "Headset",
		url: require("../assets/img/fone.jpeg"),
		price: "219.90",
		description: "Uma boa musica para relaxar!",
	},
	{
		id: 14,
		name: "Frigideira",
		url: require("../assets/img/frigideira.jpeg"),
		price: "59.90",
		description: "Preparado para um ovo frito?",
	},
	{
		id: 15,
		name: "Geladeira",
		url: require("../assets/img/geladeira.jpeg"),
		price: "899.90",
		description: "Sempre cheia, de preferencia!",
	},
	// {
	//   id: 16,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 17,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 18,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 19,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 20,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 21,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 22,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 23,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 24,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 25,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 26,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 27,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 28,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 29,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 30,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 31,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 32,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 33,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 34,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 35,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 36,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 37,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 38,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 39,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 40,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 41,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 42,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 43,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 44,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 45,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 46,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 47,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
	// {
	//   id: 48,
	//   name: "",
	//   url: require(""),
	//   price: ,
	//   description: ""
	// },
];

export default produtos;
