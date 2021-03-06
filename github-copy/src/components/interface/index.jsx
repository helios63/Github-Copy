import React from 'react';
import { Button } from '../profile/styles';
import { Interface, Tabs, Link, LinkActive, SearchBar, ButtonNew, Status, Result, Title } from './styles';
import square from "./square.png";


const InterfaceComponent = (props) => {

  // When typing into searchbar...
  const onChangeHandler = (text) => {
    let matches = [];

    // For at least 2 characters
    if (text.length > 1) {
      matches = props.repos.filter(repo => {
        const regex = new RegExp(`${text}`, "gi");
        return repo.name.match(regex);
      })
    } else {
      // When input is empty or less that 2 chars, show all repos
      matches = props.repos;
    }

    props.setResults(matches);
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
              placeholder="Find a Repository..."
              autoComplete="off"
              value={props.text}
              onChange={(event) => onChangeHandler(event.target.value)}
              className="w-full mr-0 mb-2 sm:w-auto sm:mr-2 sm:mb-0"
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

      {/* Iteration over all results */}
      {props.results.length > 0 ? (
        props.results.map((result, index) => (
          <Result key={index}>
            <div>
              <div className="flex items-center">
                <h2>
                  <Title href="#">{result.name}</Title>
                </h2>
                <Status>{result.private ? "Private" : "Public"}</Status>
              </div>
              <p className="text-base">{result.description}</p>
              <div className="flex mt-2">
                <div>
                  <div className="flex mr-4 text-sm">
                    <img
                      className="object-contain mr-2"
                      src={square}
                      alt="square"
                    />
                    <span>Javascript</span>
                  </div>
                </div>
                <div className="text-sm">
                  Last push: {new Date(result.pushed_at).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div>
              <Button>Star</Button>
            </div>
          </Result>
        ))
      ) : (
        <p className="ml-4">Sorry! There are no results "{props.text}".</p>
      )}
    </Interface>
  );
}

export default InterfaceComponent
