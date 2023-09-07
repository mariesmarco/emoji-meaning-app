import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia";

function createEntry(entry) {
  return (
    <Entry
      key={entry.id} //for making an accurate React DOM tree
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)};
    </div>
  );
}

export default App;
