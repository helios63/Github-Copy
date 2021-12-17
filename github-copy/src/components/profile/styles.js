import styled from 'styled-components'

export const ProfileBlock = styled.div`
  max-width: 260px;

  @media (max-width: 650px) {
    max-width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
  }
`

export const Avatar = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius:15px;
`
export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  background:none;
  border: 1px solid var(--orange);
  color: var(--orange);
  font-size: 14px;
  padding: 0.5em 1em;

  @media (max-width: 650px) {
    padding: 0.5em;
  }
`

export const Links = styled.div`
  display:flex;
`
