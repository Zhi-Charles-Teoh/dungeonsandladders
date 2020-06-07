import React, { useState } from "react";
import { useUsers, updateUser, deleteUser } from "../apis/user_api";

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
  return null;
}

function User(user) {
  const { id, first_name, last_name } = user;
  const [showUpdate, setShowUpdate] = useState(false);

  return (
    <div className={`user user-${id}`} key={id}>
      <div className="info">
        ({id}) {first_name} {last_name}
        <Button className={"btn"} onClick={() => setShowUpdate(!showUpdate)}>
          {showUpdate ? "-" : "+"}
        </Button>
      </div>
      <UserExtended {...user} showUpdate={showUpdate} />
    </div>
  );
}

function UserExtended(props) {
  const { id, first_name, last_name, showUpdate } = props;

  // const [id_input, setId] = useState(id);
  // const [first_input, setFirstName] = useState(first_name);
  // const [last_input, setLastName] = useState(last_name);

  function onSubmit() {
    // call upate user function
    // updateUser({
    //   id: id_input,
    //   first_name: first_input,
    //   last_name: last_input
    // });
  }

  return (
    <div className={`user-expand ${showUpdate ? "show" : ""}`}>
      <form>
        {/* TODO - add value and onChange properties to inputs */}
        <input type="text" name="id" />
        <input type="text" name="first_name" />
        <input type="text" name="last_name" />
        <Button className={"btn-warning"} onClick={onSubmit}>
          Update
        </Button>
      </form>
      <Button className={"btn-danger"} onClick={() => deleteUser(id)}>
        Delete
      </Button>
    </div>
  );
}
