import { useState } from "react";

export default function BillInput() {
  const [bill, setBill] = useState(0);

  const handleBillInput = (data) => {
    setBill(data);
  };

  return (
    <>
      <label htmlFor="bill">Bill</label>
      <br />
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(event) => handleBillInput(event.target.value)}
        placeholder="Enter your bill"
      />
    </>
  );
}
