import React from "react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [click, setClick] = useState(false);
  function handleOnchange(event) {
    setEmail(event.target.value);
  }
  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="Login">
      <div className="Form">
        <div>
          <label for="gmail">Email:</label>
          <input
            onChange={handleOnchange}
            type="email"
            id="gamil"
            name="gamil"
          />
        </div>
        <div>
          <label for="username">Username:</label>
          <input
            onChange={handleUsername}
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div>
          <label for="password">Password:</label>
          <input
            onChange={handlePassword}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="btn">
          <button onClick={() => setClick(!click)}>Login</button>
        </div>
        {click && email !== null ? <div>{email}</div> : "notLogin"}

        {username}
        {password}
      </div>
    </div>
  );
}
