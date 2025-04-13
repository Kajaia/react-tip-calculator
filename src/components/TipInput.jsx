import { useState } from "react";

export default function TipInput() {
  const [tip, setTip] = useState(15);

  const handleTipInput = (data) => {
    setTip(data);
  };

  return (
    <>
      <label htmlFor="tip">Tip</label>
      <br />
      <button onClick={() => handleTipInput(tip - 1)}>-</button>
      <input
        type="text"
        id="tip"
        value={tip}
        onChange={(event) => handleTipInput(event.target.value)}
        placeholder="Enter your tip"
      />
      <button onClick={() => handleTipInput(tip + 1)}>+</button>
    </>
  );
}
