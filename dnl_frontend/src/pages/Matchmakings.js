import React, { useState } from "react";
import { useSessions, createSession, editSession, joinSession, cancelSession } from "../apis/matchmaking_api";
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
  return (
	<div>
		<br />
		<CreateSesh />
		<h1>All Active Sessions</h1>
		<h3>Click on each of them to see the details!</h3>
		{sessions.map(session => (
			<Session key={session.id} {...session} />
		))}
	</div>
  );
}

function CreateSesh() {
	const [showCreate, setShowCreate] = useState(false);
	
	return (
		<div className="Create Session form">
			<Button className={"btn"} onClick={() => setShowCreate(!showCreate)}>
				{showCreate ? "Cancel" : "Create a Session"}
			</Button><br />
			<CreateExtended showCreate={showCreate} /><br />
		</div>
	)
}

function Session(session) {
  const { id, host, game, start_time, session_location, max_playercount, rsvp_by, notes, players } = session;
  const [showJoin, setShowJoin] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  
  const collapsible = [ game, " | ", start_time, " | ", session_location ];
    
  return (
    <div className={`session session-${id}`} key={id}>
      <div className="session info">
        <Collapsible trigger={collapsible}>
			<p>Host: {host}</p>
			<p>Game: {game}</p>
			<p>Scheduled time: {start_time}</p>
			<p>Venue: {session_location}</p>
			<p>Max players: {max_playercount}</p>
			<p>RSVP by: {rsvp_by}</p>
			<p>Notes: {notes}</p>
			<p>Current players: {players}</p>
			<Button className={"btn"} onClick={() => setShowJoin(!showJoin)}>
			  {showJoin ? "Cancel" : "Join Session"}
			</Button>
			<Button className={"btn"} onClick={() => setShowEdit(!showEdit)}>
			  {showEdit ? "Cancel" : "Edit Session"}
			</Button>
			<JoinExtended showJoin={showJoin} />
			<SessionExtended {...session} showEdit={showEdit} />
		</Collapsible><br />
      </div>
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


function CreateExtended(props) {
	const { showCreate } = props;
	
	const [host, setHost] = useState("");
	const [game, setGame] = useState("");
	const [start_time, setTime] = useState("");
	const [session_location, setLocation] = useState("");
	const [max_playercount, setMaxPlayers] = useState("");
	const [rsvp_by, setRSVP] = useState("");
	const [notes, setNotes] = useState("");

	function onSubmit() {
		createSession({
		   host,
		   game,
		   start_time,
		   session_location,
		   max_playercount,
		   rsvp_by,
		   notes,
		   players: []
		 });
	}

  return (
    <div className={`create-expand ${showCreate ? "show" : ""}`}>
      <h1>Create a Boardgame Session</h1>
      <form>
        Host username: <input
          type="text"
          name="host"
          value={host}
          onChange={event => {
             setHost(event.target.value);
          }}
        /><br />
        Game:<input
          type="text"
          name="game"
          value={game}
          onChange={event => {
             setGame(event.target.value);
          }}
        />
		Max players: <input
          type="number"
          name="max_playercount"
          value={max_playercount}
          onChange={event => {
             setMaxPlayers(event.target.value);
          }}
        /><br />
        Scheduled date and time: <input
          type="datetime-local"
          name="start_time"
          value={start_time}
          onChange={event => {
             setTime(event.target.value);
          }}
        /><br />
		Venue: <input
          type="text"
          name="session_location"
          value={session_location}
          onChange={event => {
             setLocation(event.target.value);
          }}
        /><br />
		RSVP-by: <input
          type="datetime-local"
          name="rsvp_by"
          value={rsvp_by}
          onChange={event => {
             setRSVP(event.target.value);
          }}
        /><br />
		Additional notes:<br /> <textarea
          name="notes"
		  rows="5" 
		  cols="33"
          value={notes}
          onChange={event => {
             setNotes(event.target.value);
          }}
		></textarea><br />
        <Button className={"btn-success"} onClick={onSubmit}>
          Create
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
