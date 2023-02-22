import { Component } from "react";

// import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const app = () => {
	return (
		<div className="App">
			<h1 className="app-title">Monster Rolodex</h1>
		</div>
	);
};

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
// 	componentDidMount() {
// 		// console.log("ComponentDidMount");
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((response) => response.json())
// 			.then((users) =>
// 				this.setState(
// 					() => {
// 						return { monster: users };
// 					},
// 					() => {
// 						// console.log(this.state);
// 					}
// 				)
// 			);
// 	}

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

export default app;
