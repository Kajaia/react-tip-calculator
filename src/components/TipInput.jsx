export default function TipInput({ tip, setTip }) {
  const handleTipInput = (data) => {
    if (data < 0) return;
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
