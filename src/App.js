import "./styles.css";
import React, { useState } from "react";
var name = "inside outt";
var color = "green";
const emojisdict = {
  "🦁": "lion",
  "🐅": "tiger",
  "🐎": "horse",
  "🐐": "goat",
  "🐘": "elephant"
};
var emojis = Object.keys(emojisdict);

export default function App() {
  var [meaning, setmeaning] = useState(" ");
  function changehandler(event) {
    var meaning = emojisdict[event.target.value];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setmeaning(meaning);
  }

  function listclick(item) {
    var meaning = emojisdict[item];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{name}</h1>
      <input onChange={changehandler}></input>
      <div className="answer">{meaning}</div>
      <h2>emojis we know</h2>
      <div className="center">
        <ul>
          {emojis.map(function (item, index) {
            return (
              <li onClick={() => listclick(item)} className="inline">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
