export default function PeopleInput({ people, setPeople }) {
  const handlePeopleInput = (data) => {
    if (data < 1) return;
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
