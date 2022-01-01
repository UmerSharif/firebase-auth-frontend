import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
  const [Users, setUser] = useState([]);
//   console.log(Users)
  async function getUser(idToken) {
    const user = await axios.get("http://localhost:5000/api/v1/users", {
      headers: {
        Authtoken: idToken ? idToken : '',
      },
    });
    setUser(user.data);
  }
  useEffect(() => {
  const idToken = localStorage.getItem('idToken')
    getUser(idToken)
  }, []);
  return (
    <div>
      {Users.map((user) => (
        <ul key={user.id}>
          <li>{user.email}</li>
        </ul>
      ))}
    </div>
  );
}
