import React, { useState } from "react";
import { useGames } from "../apis/game_api";
import Collapsible from 'react-collapsible';

import Button from "../components/Button";

export default function Games() {
  const { loading, games, error } = useGames();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  console.log(games);

  return (
	<div>
		<h1>All Games</h1>
		{games.map(game => (
			<Game key={game.id} {...game} />
		))}
	</div>
  );
}

function Game(game) {
	const { id, name, min_playercount, max_playercount, like_count, dislike_count } = game;
	const [showInfo, setShowInfo] = useState(false);

	return (
		<div className={`game game-${id}`} key={id}>
		  <div className="info">
			<Collapsible trigger={name}>
				<p>Recommended number of players: {min_playercount} - {max_playercount}</p>
				<p>{like_count} likes, {dislike_count} dislikes</p>
			</Collapsible>
		  </div>
		</div>
	);
}
