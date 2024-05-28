import React from "react";
import "./UserDetails.scss";

export default function UserDetails({ userData }) {
  return (
    <div className="userDetails">
      <div className="avatar">
        <img
          src={userData.avatar_url}
          alt={`${userData.name} avatar`}
          width="100"
        />
      </div>
      <div className="details">
        <h2>{userData.name}</h2>
        <p>
          <b>Location:</b> {userData.location}
        </p>
        <p>
          <b>Bio:</b> {userData.bio}
        </p>
      </div>
    </div>
  );
}
