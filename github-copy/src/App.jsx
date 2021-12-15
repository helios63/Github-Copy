import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import {GlobalStyle, Main} from "./styles";
import Header from "./components/header";
import Profile from "./components/profile";
import Interface from "./components/interface";

const App = () => {

  const [repos, setRepos] = useState([]);
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  useEffect( () => {
    const loadRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/helios63/repos?per_page=100')
        setRepos(response.data)
        setResults(response.data)
      } catch {
        console.log('NO FUNCIONA')
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
    </>
  );
}

export default App
