import React from 'react'
import { Button } from '../profile/styles'
import { Interface, Tabs, Link, LinkActive, SearchBar, ButtonNew, Status, Result} from './styles'
import square from "./square.png";

const InterfaceComponent = () => (
  <Interface>
    <Tabs>
      <Link href="#">Overview</Link>
      <LinkActive href="#">Repositories</LinkActive>
      <Link href="#">Projects</Link>
      <Link href="#">Packages</Link>
      <Link href="#">Stars</Link>
    </Tabs>
    <SearchBar>
      <div>
        <form action="#">
          <input name="search" type="text" placeholder='Find a Repository...' class="mr-2"/>
          <select name="types" id="type" class="mr-2">
            <option value="javascript">Type: All</option>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
          <select name="languages" id="lang" class="mr-2">
            <option value="javascript">Type: All</option>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
        </form>
      </div>
      <ButtonNew>New</ButtonNew>
    </SearchBar>
    <Result>
        <div>
          <div class="flex items-center">
            <h2>Project Name</h2>
            <Status>Public</Status>
          </div>
          <description class="text-base">new_project description new_project description new_project description</description>
          <div class="flex mt-2">
            <div>
              <div class="flex mr-4"><img class="object-contain" src={square}/>Javascript</div>
            </div>
            <div class="text-sm">Updated 3 weeks ago</div>
          </div>
        </div>
        <div><Button>Star</Button></div>

    </Result>
  </Interface>
)

export default InterfaceComponent
