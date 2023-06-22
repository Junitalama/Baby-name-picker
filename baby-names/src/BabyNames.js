import React from "react";
import data from "./babyNamesData.json";

function BabyNames() {
  data.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="App">
      {data.map((element) => (
        <span className={element.sex}>{element.name} </span>
      ))}
    </div>
  );
}

export default BabyNames;
