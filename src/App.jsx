import { useState } from "react";
import "./App.css";
import BillInput from "./components/BillInput";
import PeopleInput from "./components/PeopleInput";
import Result from "./components/Result";
import TipInput from "./components/TipInput";

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);

  return (
    <>
      <h1>Tip Calculator</h1>
      <div className="card">
        <BillInput bill={bill} setBill={setBill} />
        <br />
        <TipInput tip={tip} setTip={setTip} />
        <br />
        <PeopleInput people={people} setPeople={setPeople} />
        <br />
        <Result bill={bill} tip={tip} people={people} />
      </div>
    </>
  );
}

export default App;
