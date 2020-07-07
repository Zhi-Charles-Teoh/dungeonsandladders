import React, { useState } from "react";
import { useUsers } from "../apis/user_api";
import Collapsible from 'react-collapsible';

import Button from "../components/Button";

export default function Users() {
  const { loading, users, error } = useUsers();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  // use this to make sure you are getting the right data
  console.log(users);

  // Display a list of the users
  return (
	<div>
		<h1>All Users</h1>
		{users.map(user => (
			<User key={user.id} {...user} />
		))}
	</div>
  );
}

function User(user) {
  const { id, profile_name, real_name, join_date, lives_in } = user;

  return (
    <div className={`user user-${id}`} key={id}>
      <div className="info">
		<Collapsible trigger={profile_name}>
			<p>Real name: {real_name}</p>
			<p>Location: {lives_in}</p>
			<p>Joined: {join_date}</p>
		</Collapsible>
      </div>
    </div>
  );
}

