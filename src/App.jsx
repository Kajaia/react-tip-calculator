import "./App.css";
import BillInput from "./components/BillInput";
import PeopleInput from "./components/PeopleInput";
import Result from "./components/Result";
import TipInput from "./components/TipInput";

function App() {
  return (
    <>
      <h1>Tip Calculator</h1>
      <div className="card">
        <BillInput />
        <br />
        <TipInput />
        <br />
        <PeopleInput />
        <br />
        <Result />
      </div>
    </>
  );
}

export default App;
