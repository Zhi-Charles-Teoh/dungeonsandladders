import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
	return (
		<nav>
			<NavLink exact to="/">
				Home
			</NavLink>
			<NavLink to="/users">Users</NavLink>
			<NavLink to="/games">Games</NavLink>
			<NavLink to="/sessions">Sessions</NavLink>
		</nav>
	);
}
