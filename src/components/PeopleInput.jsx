import { useState } from "react";

export default function PeopleInput() {
  const [people, setPeople] = useState(1);

  const handlePeopleInput = (data) => {
    setPeople(data);
  };

  return (
    <>
      <label htmlFor="people">People</label>
      <br />
      <button onClick={() => handlePeopleInput(people - 1)}>-</button>
      <input
        type="text"
        id="people"
        value={people}
        onChange={(event) => handlePeopleInput(event.target.value)}
        placeholder="Enter your people"
      />
      <button onClick={() => handlePeopleInput(people + 1)}>+</button>
    </>
  );
}
