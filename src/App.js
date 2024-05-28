import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import SearchForm from "./components/search/Search";
import UserDetails from "./components/userDetails/UserDetails";
import RepoList from "./components/repo/Repo";
import ResetButton from "./components/resetBtn/ResetBtn";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    if (username) {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          setUserData(response.data);
          setError(null);
          return axios.get(response.data.repos_url);
        })
        .then((response) => {
          setRepos(response.data);
        })
        .catch((err) => {
          setUserData(null);
          setRepos([]);
          setError("User not found");
        });
    }
  };

  const handleReset = () => {
    setUsername("");
    setUserData(null);
    setRepos([]);
    setError(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github search app</h1>
        <SearchForm
          username={username}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />
        {error && <p>{error}</p>}
        {userData && (
          <>
            <UserDetails userData={userData} />
            <RepoList repos={repos} />
          </>
        )}
        {(userData || error) && <ResetButton onReset={handleReset} />}
      </header>
    </div>
  );
}

export default App;
