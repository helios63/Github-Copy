import styled from 'styled-components'

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--gris);
  padding: 1em 3em 1em 1em;
  margin: 2em 0;

  font-family: Lato;
  font-size: 10px;
  color: var(--gris);
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.47em;
  text-align: right;
  text-transform: uppercase;

  @media (max-width: 650px) {
    padding: 0.5em;
  }
`
