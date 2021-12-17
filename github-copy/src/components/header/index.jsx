import React from 'react'
import {Header, HeaderSearch, Logo, Avatar, Nav} from './styles.js';
import logo from "./logo.png";
import avatar from "./avatar.png";

const HeaderComponent = () => (
  <Header>
    <div className="flex items-center">
      <Logo src={logo} title="Logo Github" />
      <HeaderSearch
        className="mr-4"
        type="text"
        name="search"
        placeholder='Search or jump to...'/>
      <Nav>
        <a href="#">Pull Requests</a>
        <a href="#">Issues</a>
        <a href="#">Marketplace</a>
        <a href="#">Explore</a>
      </Nav>
    </div>
    <div className="flex">
      <Avatar
        src={avatar}
        title="User avatar"
        alt="Avatar" />
    </div>
  </Header>
)

export default HeaderComponent
