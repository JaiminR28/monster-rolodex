import React, { useState, useEffect } from "react";
// import React, { usestate } from "react";

// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

function App() {
	// Declare a new state variable, which we'll call "count"
	const [searchField, setSearchField] = useState(""); // [value, setValue]
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setfilteredMonsters] = useState(monsters);
	// console.log(searchField);
	console.log("renders");

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setMonsters(users));
		// console.log("Use effecr");
	}, []);

	useEffect(() => {
		const newFilteredMonster = monsters.filter((monsters) => {
			return monsters.name.toLowerCase().includes(searchField);
		});

		setfilteredMonsters(newFilteredMonster);
		console.log("Effect is firing");
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className="App">
			<h1 className="app-title">Monster Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder={"search monster"}
				className={"monsters-search-box"}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
}

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			// monster1: {
// 			// 	name: "Wednesday",
// 			// },
// 			// monster2: {
// 			// 	name: "Monkey",
// 			// },
// 			// monster3: {
// 			// 	name: "Frank",
// 			// },
// 			monster: [],
// 			searchField: "",
// 		};
// 		// console.log("constructors");
// 	}
// componentDidMount() {
// 	// console.log("ComponentDidMount");
// 	fetch("https://jsonplaceholder.typicode.com/users")
// 		.then((response) => response.json())
// 		.then((users) =>
// 			this.setState(
// 				() => {
// 					return { monster: users };
// 				},
// 				() => {
// 					// console.log(this.state);
// 				}
// 			)
// 		);
// }

// 	onSearchChange = (event) => {
// 		// console.log(event.target.value);
// 		const searchField = event.target.value.toLocaleLowerCase();
// 		//
// 		// console.log(filteredMonster);
// 		this.setState(() => {
// 			return { searchField };
// 		});
// 	};

// 	render() {
// 		const { monster, searchField } = this.state;
// 		const { onSearchChange } = this;
// 		const filteredMonster = monster.filter((monsters) => {
// 			return monsters.name.toLowerCase().includes(searchField);
// 		});
// 		return (
// 			<div className="App">
// 				{/**filteredMonster.map((monsters) => {
// 				// 	return (
// 				 		<div key={monsters.id}>
// 				 			<h1>{monsters.name}</h1>
// 				 		</div>
// 				 	);
// 				 })  */}

// 				<h1 className="app-title">Monster Rolodex</h1>
// 				<SearchBox
// 					onChangeHandler={onSearchChange}
// 					placeholder={"search monster"}
// 					className={"monsters-search-box"}
// 				></SearchBox>
// 				<CardList monsters={filteredMonster} />
// 			</div>
// 		);
// 	}
// }

export default App;
