import React, { useState } from "react";
import data from "./babyNamesData.json";

function BabyNames() {
  const sortedNames = data.sort((a, b) => a.name.localeCompare(b.name));

  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }
  const filtered = !query ? sortedNames: sortedNames.filter((person) =>
        person.name.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div>
      <div>
        <input type="text" placeholder="search.." className="search" value={query} onChange={handleChange}
        />
      </div>
      <div className="baby-names">
        {filtered.map((element) => {
          return (
            <span key={element.name} className={element.sex}>
              {element.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default BabyNames;
