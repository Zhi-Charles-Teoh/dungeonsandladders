import { useState, useEffect } from "react";

// TODO - update this to be your url
const BASE_URL = "https://dungeons-and-ladders.herokuapp.com";

function getUsers() {
  const endpoint = BASE_URL + `/users`;

  // TODO
  // return fetch call that gets author list
}

export function getUser(id) {
  const endpoint = BASE_URL + `/users/${id}`;

  // TODO
  // return fetch statement to get an author by the id
}

export function addUser(new_user) {
  const { email, password, profile_name, real_name, birth_date, lives_in } = new_user;
  if (!email || !password || !profile_name || !birth_date || !lives_in) {
    alert("must include all fields");
    return;
  }

  const endpoint = BASE_URL + `/users/signup/`;

  // TODO
  // return fetch statement to add an author
}

export function updateUser(user) {
  const { email, password, profile_name, real_name, birth_date, lives_in } = user;
  if (!email) {
    alert("must include an email");
    return;
  }
  if (!password) {
    alert("must include a password");
    return;
  }
  if (!profile_name) {
    alert("profile name cannot be left blank");
    return;
  }
  if (!birth_date) {
    alert("must include a complete birth date");
    return;
  }
  if (!lives_in) {
    alert("must include a region of residency");
    return;
  }

  const endpoint = BASE_URL + `/users/edit/${id}`;

  // return fetch query to update an author
}

export function deleteUser(id) {
  const endpoint = BASE_URL + `/users/delete/${id}`;

  // return fetch query
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
