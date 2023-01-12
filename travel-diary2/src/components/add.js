import React, { useState } from "react";

const Add = () => {
  const [thingsArray, setThing] = useState(["Thing 1", "Thing 2"]);

  const addThing = () => {
    setThing((prevThingsArray) => [
      ...prevThingsArray,
      `Thing ${prevThingsArray.length + 1}`,
    ]);
    console.log(thingsArray);
    const date = new Date();
    const hours = date.getHours();
    console.log(date, hours);
  };

  const thing = thingsArray.map((thingy) => {
    return <p>{thingy}</p>;
  });

  return (
    <div>
      <button onClick={addThing}>Click ME</button>
      {thing}
    </div>
  );
};

export default Add;
