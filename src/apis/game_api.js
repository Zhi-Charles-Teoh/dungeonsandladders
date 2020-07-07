import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://dungeons-and-ladders.herokuapp.com";

function getAllGames() {
	const endpoint = BASE_URL + `/games`;
	
	return fetch(endpoint).then(res => {
		console.log(res);
		return res.json();
	});
}


export function useGames() {
	const [loading, setLoading] = useState(true);
	const [games, setGames] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
	getAllGames()
		.then(games => {
			setGames(games);
			setLoading(false);
		})
		.catch(e => {
			console.log(e);
			setError(e);
			setLoading(false);
		});
	}, []);

	return {
		loading,
		games,
		error
	};
}
