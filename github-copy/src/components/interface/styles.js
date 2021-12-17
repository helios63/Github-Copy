import styled from 'styled-components'

export const Interface = styled.div`
  width:100%;
  background-color: var(--background);
  border-radius: 15px;
  margin-right:1em;

  @media (max-width: 650px) {
    padding: 0 1.5em 0 0;
  }

  @media (max-width: 360px) {
  border-radius: 0;
  }
`

export const Tabs = styled.div`
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--gris);
  padding: 0.5em 1em 0;

  @media (max-width: 650px) {
    padding: 0.5em 0.5em 0 0.5em;
  }
`

export const SearchBar = styled.div`
  display:flex;
  padding: 1em;

  @media (max-width:650px) {
    flex-direction: column;
  }
`

export const ButtonNew = styled.button`
  border-radius: 5px;
  background: var(--orange);
  color: #FFF;
  font-size: 14px;
  padding: 0.5em 1em;

  @media (max-width: 650px) {
    margin-top:0.5em;
    padding: 0.5em;
  }
`



export const Link = styled.a`
  padding: 0.5em 0;
  margin: 0 0.5em;

  @media (max-width: 650px) {
    padding: 0;
  }
`

export const LinkActive = styled.a`
  color: var(--black);
  font-weight: bold;
  border-bottom: 3px solid var(--orange);
  padding: 0.5em 0;
  margin: 0 0.5em;

  @media (max-width: 650px) {
    padding: 0 0 0.5em 0;
  }
`

export const Status = styled.div`
  padding: 0.2em 0.5em;
  background-color: var(--gris);
  border-radius:5px;
  font-size: 14px;
  color: var(--gris2);
  margin-left: 1em;

  @media (max-width: 650px) {
    margin-left: 0.5em;
  }
`

export const Result = styled.div`
  width:100%;
  padding: 2em;
  border-top: 1px solid var(--gris);
  display:flex;
  justify-content: space-between;
  align-items:center;

  @media (max-width:850px) {
    padding:1em;
  }
`
export const Title = styled.a`
  font-size:24px;
  font-weight:bold;
  color: var(--orange);

`
