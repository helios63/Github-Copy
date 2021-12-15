import React from 'react'
import {Header, Logo, Avatar, Nav} from './styles.js';
import logo from "./logo.png";
import avatar from "./avatar.png";

const HeaderComponent = () => (
  <Header>
    <div class="flex items-center">
      <Logo src={logo} title="Logo Github" />
      <input class="mr-4" type="text" name="search" placeholder='Search or jump to...'/>
      <Nav>
        <a href="#">Pull Requests</a>
        <a href="#">Issues</a>
        <a href="#">Marketplace</a>
        <a href="#">Explore</a>
      </Nav>
    </div>
    <div class="flex">
      <Avatar src={avatar} title="User avatar" />
    </div>
  </Header>
)

export default HeaderComponent
