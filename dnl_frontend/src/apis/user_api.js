import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://dungeons-and-ladders.herokuapp.com";

function getUsers() {
  const endpoint = BASE_URL + `/users`;

	return fetch(endpoint).then(res => {
		console.log(res);
		return res.json();
	});
}

export function useUsers() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then(users => {
        setUsers(users);
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
    users,
    error
  };
}
