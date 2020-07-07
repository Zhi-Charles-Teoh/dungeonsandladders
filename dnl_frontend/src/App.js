import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Header from "./components/Header";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Games from "./pages/Games";
import Matchmakings from "./pages/Matchmakings";

import "./styles.css";

export default function App() {
  return (
	<Router>
		<div className="App">
			<Nav />
			<Header />
			{/* the content */}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				
				<Route path="/users">
					<Users />
				</Route>			

				<Route path="/games">
					<Games />
				</Route>
				
				<Route path="/sessions">
					<Matchmakings />
				</Route>
			</Switch>
		</div>
	</Router>
  );
}
