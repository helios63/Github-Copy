import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import {GlobalStyle, Main} from "./styles";
import Header from "./components/header";
import Profile from "./components/profile";
import Interface from "./components/interface";
import Footer from "./components/footer";

const App = () => {

  const [repos, setRepos] = useState([]);
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  useEffect( () => {
    const loadRepos = async () => {
      try {
        // Fetching repositories from Github API
        const response = await axios.get('https://api.github.com/users/helios63/repos?per_page=100')
        setRepos(response.data)
        setResults(response.data)
      } catch {
        // If API doesnt work
        console.log('It doesnt work')
      }
    }
    loadRepos();
  }, [])

  return (
    <>
    <GlobalStyle />
    <Header />
    <Main>
      <Profile />
      <Interface text={text} repos={repos} results={results} setResults={setResults} setText={setText} />
    </ Main>
    <Footer />
    </>
  );
}

export default App
