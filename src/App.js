import React, { Component } from "react";
//import Cards from "./components/Cards/Cards";
//import Charts from "./components/Charts/Charts";
//import CountryPicker from "./components/CountryPicker/CountryPicker";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import CovidImg from "./images/covid19.png";

class App extends Component {
	state = {
		data: {},
		country: "",
	};

	handleCountryChange = async (country) => {
		const data = await fetchData(country);
		this.setState({ data, country });
	};

	async componentDidMount() {
		const data = await fetchData();
		this.setState({ data });
	}
	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img className={styles.image} src={CovidImg} alt="COVID-19 Tracker" />
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Charts data={data} country={country} />
			</div>
		);
	}
}

export default App;
