import React, { useState } from "react";

import { createSession } from "../apis/matchmaking_api";
import Button from "../components/Button";

export default function Header() {
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
    <div className="createSession">
      Create a Boardgame Session
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
