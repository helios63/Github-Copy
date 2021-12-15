import React from 'react'
import { Button } from '../profile/styles'
import { Interface, Tabs, Link, LinkActive, SearchBar, ButtonNew, Status, Result} from './styles'
import square from "./square.png";


const InterfaceComponent = (props) => {

  const onChangeHandler = (text) => {
    let matches = [];

    if (text.length > 1 ) {
      matches = props.repos.filter( repo => {
        const regex = new RegExp(`${text}`, "gi");
        return repo.name.match(regex)
      })
    } else {
      matches = props.repos
    }

    props.setResults(matches);
    console.log(matches)
    props.setText(text);
  }

  return (
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
          <input
          name="search"
          type="text"
          placeholder='Find a Repository...'
          autoComplete="off"
          value={props.text}
          onChange={ event => onChangeHandler(event.target.value)}
          className="mr-2"
           />
          <select name="types" id="type" className="mr-2">
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
          <select name="languages" id="lang" className="mr-2">
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
    { props.results.length > 0 ? props.results.map((result, index) =>
      <Result key={index}>
          <div>
            <div className="flex items-center">
              <h2>{result.name}</h2>
              <Status>{result.private ? "Private" : "Public" }</Status>
            </div>
          <p className="text-base">{result.description}</p>
            <div className="flex mt-2">
              <div>
                <div className="flex mr-4"><img className="object-contain" src={square}/>Javascript</div>
              </div>
              <div className="text-sm">Updated 3 weeks ago</div>
            </div>
          </div>
          <div><Button>Star</Button></div>
      </Result>
    ) : <p>No hay resultados! </p>}
  </Interface>
  )
}

export default InterfaceComponent
