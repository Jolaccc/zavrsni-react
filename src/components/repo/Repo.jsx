import React from "react";
import "./Repo.scss";

export default function RepoList({ repos }) {
  return (
    <div className="repoList">
      <h3>Repozitoriji:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
