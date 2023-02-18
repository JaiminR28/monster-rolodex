import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			// monster1: {
			// 	name: "Wednesday",
			// },
			// monster2: {
			// 	name: "Monkey",
			// },
			// monster3: {
			// 	name: "Frank",
			// },
			monster: [],
		};
	}
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) =>
				this.setState(
					() => {
						return { monster: users };
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	render() {
		return (
			<div className="App">
				{this.state.monster.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
