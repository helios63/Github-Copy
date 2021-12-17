import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root {
  --background: #FDF7F4;
  --gris: #C4C4C4;
  --black: #242020;
  --orange: #E55325;
  --gris2: #7C7C7C;
}

  body {
    background-color: #fff;
    color: var(--black);
    font-family: 'Lato', sans-serif;
    font-size:18px;
    font-weight:500;
    line-height:1.2;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    text-decoration:none;
    color: var(--gris2);
    transition: color 0.8s ease-in-out;
  }

  a:hover {
    color: var(--black);
  }

  input, select {
    padding: 0.5em;
    border-radius: 4px;
    border: 1px solid var(--gris);
    font-size: 14px;
  }

  select {
    max-width:90px;
    padding: 0.5em;
  }

  h2 {
    font-family: 'Lato', sans-serif;
    font-size: 26px;
    font-style: bold;
    font-weight: 700;
    line-height: 31px;
    color: var(--black);
  }

  h3 {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--black);
  }

  p {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    color: var(--black);
    padding: 1.5em 0;
  }

  @media (max-width: 850px) {
    body {
      font-size:14px;
    }
    a {
      font-size:14px;
    }
    input, select {
      font-size: 12px;
    }
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 14px;
    }
    p {
      font-size:14px;
      padding: 0.8em 0;
    }
  }

  @media (max-width: 360px) {
    a {
      font-size:13px;
    }
  }

`
export const Main = styled.main`
  width: 100%;
  padding: 1em 2em 1em 1em;
  display:grid;
  grid-template-columns: 260px auto;
  gap: 1em;

    @media (max-width: 850px) {
      padding: 0.5em 1.5em 0.5em 0.5em;
      grid-template-columns: 180px auto;
      gap: 0.5em;
    }

    @media (max-width: 650px) {
      padding: 0.5em 0 0 0 ;
      grid-template-columns: 1fr;
    }
`
