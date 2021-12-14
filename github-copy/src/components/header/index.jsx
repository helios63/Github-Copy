import {Header, Logo, Avatar} from './styles.js';
import logo from "./logo.png";
import avatar from "./avatar.png";

const HeaderComponent = () => (
  <Header>
    <div class="flex">
      <Logo src={logo} title="Logo Github" />
      <input type="text" name="search" placeholder='Search or jump to...'/>
    </div>
    <div class="flex">
      <Avatar src={avatar} title="User avatar"  />
    </div>
  </Header>
)

export default HeaderComponent;
