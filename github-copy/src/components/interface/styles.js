import styled from 'styled-components'

export const Interface = styled.div`
  width:100%;
  background-color: var(--background);
  border-radius: 15px;

`

export const Tabs = styled.div`
  width: 100%;
  display:flex;
  border-bottom: 1px solid var(--gris);
  padding: 0.5em 1em 0;
`

export const Link = styled.a`
  padding: 0.5em 0;
  margin: 0 0.5em;
`

export const LinkActive = styled.a`
  color: var(--black);
  font-weight: bold;
  border-bottom: 3px solid var(--orange);
  padding: 0.5em 0;
  margin: 0 0.5em;
`

export const SearchBar = styled.div`
  width: 100%;
  display:flex;
  border-bottom: 1px solid var(--gris);
  padding: 1em 1em;
`

export const ButtonNew = styled.button`
  border-radius: 5px;
  background: var(--orange);
  color: #FFF;
  font-size: 14px;
  font-weight:bold;
  padding: 0.5em 1em;
`

export const Status = styled.div`
  padding: 0.2em 0.5em;
  background-color: var(--gris);
  border-radius:5px;
  font-size: 14px;
  color: var(--gris2);
  margin-left: 1em;
`

export const Result = styled.div`
  width:100%;
  padding: 2em;
  border-bottom: 1px solid var(--gris);
  display:flex;
  justify-content: space-between;
  align-items:center;
`
