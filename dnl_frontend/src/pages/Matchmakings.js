import React, { useState } from "react";
import { useSessions, editSession, joinSession, cancelSession } from "../apis/matchmaking_api";
import Collapsible from 'react-collapsible';

import Button from "../components/Button";

export default function Sessions() {
  const { loading, sessions, error } = useSessions();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // use this to make sure you are getting the right data
  console.log(sessions);

  // Display a list of the sessions
  return null;
}

function Session(session) {
  const { id, host, game, start_time, session_location, max_playercount, rsvp_by, notes, players } = session;
  const [showJoin, setShowJoin] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className={`session session-${id}`} key={id}>
      <div className="info">
        <Collapsible trigger="{game} | {start_time} | {session_location}">
			<p>Host: {host}</p>
			<p>Game: {game}</p>
			<p>Scheduled time: {start_time}</p>
			<p>Venue: {session_location}</p>
			<p>Max players: {max_playercount}</p>
			<p>RSVP by: {rsvp_by}</p>
			<p>Notes: {notes}</p>
			<p><ShowPlayers players={players} /></p>
			<Button className={"btn"} onClick={() => setShowJoin(!showJoin)}>
			  {showJoin ? "Cancel" : "Join Session"}
			</Button>
			<Button className={"btn"} onClick={() => setShowEdit(!showEdit)}>
			  {showEdit ? "Collapse" : "Edit Session"}
			</Button>
		</Collapsible>
      </div>
	  <JoinExtended showJoin={showJoin} />
      <SessionExtended {...session} showEdit={showEdit} />
    </div>
  );
}

function ShowPlayers(props) {
	
	return (
		<div className="All Players">
			<p>Current players:</p>
			<script>
				props.players.forEach(element => document.write(element));
			</script>
			<br />
		</div>
	);
}
	

function JoinExtended(props) {

	const { id, showJoin } = props;
	const [user, setUser] = useState("");
	
	function onSubmit() {
		joinSession(id, user);
	}
	
	return (
		<div className={`join-expand ${showJoin ? "show" : ""}`}>
			<form>
				<input
				  type="text"
				  placeholder="Your username"
				  name="user"
				  value={user}
				  onChange={event => {
					 setUser(event.target.value);
				  }}
				/>
				<Button className={"btn-warning"} onClick={onSubmit}>
				  Join
				</Button>
			</form>
		</div>
	);
}


function SessionExtended(props) {
	const { id, host, game, start_time, session_location, max_playercount, rsvp_by, notes, showEdit } = props;

	const [host_input, setHost] = useState(host);
	const [game_input, setGame] = useState(game);
	const [start_time_input, setTime] = useState(start_time);
	const [session_location_input, setLocation] = useState(session_location);
	const [max_playercount_input, setMaxPlayers] = useState(max_playercount);
	const [rsvp_by_input, setRSVP] = useState(rsvp_by);
	const [notes_input, setNotes] = useState(notes);

	function onSubmit() {
	// call upate session function
	editSession({
		host: host_input,
		start_time: start_time_input,
		session_location: session_location_input,
		game: game_input,
		max_playercount: max_playercount_input,
		rsvp_by: rsvp_by_input,
		notes: notes_input
	});
	}

  return (
    <div className={`session-expand ${showEdit ? "show" : ""}`}>
      <form>
        <input
          type="text"
          placeholder="Host username"
          name="host"
          value={host_input}
          onChange={event => {
             setHost(event.target.value);
          }}
        /><br />
        <input
          type="text"
          placeholder="Game"
          name="game"
          value={game_input}
          onChange={event => {
             setGame(event.target.value);
          }}
        />
		<input
          type="number"
          placeholder="Max player count"
          name="max_playercount"
          value={max_playercount_input}
          onChange={event => {
             setMaxPlayers(event.target.value);
          }}
        /><br />
        <input
          type="datetime-local"
          placeholder="Scheduled date and time"
          name="start_time"
          value={start_time_input}
          onChange={event => {
             setTime(event.target.value);
          }}
        /><br />
		<input
          type="text"
          placeholder="Venue"
          name="session_location"
          value={session_location_input}
          onChange={event => {
             setLocation(event.target.value);
          }}
        /><br />
		<input
          type="text"
          placeholder="RSVP-by date"
          name="rsvp_by"
          value={rsvp_by_input}
          onChange={event => {
             setRSVP(event.target.value);
          }}
        /><br />
		<textarea
          placeholder="Additional notes"
          name="notes"
		  rows="5" 
		  cols="33"
          value={notes_input}
          onChange={event => {
             setNotes(event.target.value);
          }}
		></textarea><br />
        <Button className={"btn-warning"} onClick={onSubmit}>
          Edit
        </Button>
      </form><br />
      <Button className={"btn-danger"} onClick={() => cancelSession(id)}>
        Cancel session
      </Button>
    </div>
  );
}
