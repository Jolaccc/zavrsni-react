import React from "react";
import "./Search.scss";

export default function SearchForm({ username, onInputChange, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={onInputChange}
        placeholder="Unesite GitHub korisničko ime"
        className="input"
      />
      <button className="btn" onClick={onSearch}>
        Pretraživanje
      </button>
    </div>
  );
}
