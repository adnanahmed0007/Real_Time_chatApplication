import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="Header">
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/sign">Signn</Link>
      </div>
    </div>
  );
}
