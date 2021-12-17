import styled from 'styled-components'

export const Logo = styled.img`
  height: auto;
  max-width: 40px;
  width: 100%;
  margin-right: 0.8em;
`
export const Header = styled.header`
  background-color: var(--background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  @media (max-width: 650px) {
    padding: 0.5em;
  }
`

export const HeaderSearch = styled.input`
  @media (max-width: 650px) {
    display:none;
  }
`

export const Avatar = styled.img`
  height: auto;
  max-width: 40px;
  width: 100%;
`
export const Nav = styled.nav`
  width: 320px;
  display:flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    display:none;
  }
`
