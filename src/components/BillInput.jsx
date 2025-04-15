export default function BillInput({ bill, setBill }) {
  const handleBillInput = (data) => {
    if (data < 0) return;
    setBill(data);
  };

  return (
    <>
      <label htmlFor="bill">Bill</label>
      <br />
      <input
        type="number"
        id="bill"
        value={bill}
        onChange={(event) => handleBillInput(event.target.value)}
        placeholder="Enter your bill"
      />
    </>
  );
}
