import React from "react";
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
        const response = await axios.get()
      } catch {
        console.log('NO FUNCIONA')
      }
    }
  }, [])

  return (
    <>
    <GlobalStyle />
    <Header />
    <Main>
      <Profile />
      <Interface />
    </ Main>
    </>
  );
}

export default App
