import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://dungeons-and-ladders.herokuapp.com";

function getAllSessions() {
	const endpoint = BASE_URL + `/sessions`;
	
	
	return fetch(endpoint).then(res => {
		console.log(res);
		return res.json();
	});
}


export function createSession(session) {
	const { host, start_time, session_location, game, max_playercount, rsvp_by, notes, players } = session;
	if (!host || !start_time || !session_location || !game || !rsvp_by) {
		alert("must include key fields");
		return;
	}

	const endpoint = BASE_URL + `/sessions/`;

	// TODO
	// return fetch statement to add an author
	return fetch(endpoint, { 
		method: "POST", 
		headers: { 
		  "Content-Type": "application/json" 
		}, 
		body: JSON.stringify({ 
		  host,
		  start_time,
		  session_location,
		  game,
		  max_playercount,
		  rsvp_by,
		  notes,
		  players
		}) 
	}).then(res => window.location.reload()); 	
}

export function editSession(session) {
	const { id, host, start_time, session_location, game, max_playercount, rsvp_by, notes, players } = session;
	
	if (!id) {
		alert("must include an id");
		return;
	}
	
	if (!host) {
		alert("must include a host");
		return;
	}

	if (!start_time || !rsvp_by) {
		alert("must include a session start time and rsvp date");
		return;
	}

	if (!session_location) {
		alert("must include a session venue");
		return;
	}

	if (!game) {
		alert("must include a game");
		return;
	}

	const endpoint = BASE_URL + `/sessions/${id}`;

	// return fetch query to update an author
	return fetch(endpoint, { 
		method: "PUT", 
		headers: { 
		  "Content-Type": "application/json" 
		}, 
		body: JSON.stringify({ 
		  host,
		  start_time,
		  session_location,
		  game,
		  max_playercount,
		  rsvp_by,
		  notes,
		  players
		}) 
	}).then(res => window.location.reload()); 	
}

export function joinSession(id, user) {
	const username = user;

	if (!username) {
		alert("must include a username");
	}
	
	const endpoint = BASE_URL + `/sessions/${id}/join/${username}`;
	
	return fetch(endpoint, { 
		method: "PUT", 
	}).then(res => window.location.reload()); 
}

export function cancelSession(id) {
	const endpoint = BASE_URL + `/sessions/${id}`;

	return fetch(endpoint, { 
		method: "DELETE", 
	}).then(res => window.location.reload()); 
}

export function useSessions() {
	const [loading, setLoading] = useState(true);
	const [sessions, setSessions] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
	getAllSessions()
	  .then(sessions => {
		setSessions(sessions);
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
	sessions,
	error
	};
}
