import { useEffect, useState } from "react";

export default function Result({ bill, tip, people }) {
  const [percent, setPercent] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setPercent((bill / people) * (tip / 100));
  }, [bill, tip, people]);

  useEffect(() => {
    setTotal(bill / people + percent);
  }, [bill, people, percent]);

  return (
    <>
      <p>
        <strong>Tip:</strong> ${percent.toFixed(2)}{" "}
        {people > 1 ? <small>(per person)</small> : ""}
      </p>
      <p>
        <strong>Total:</strong> ${total.toFixed(2)}{" "}
        {people > 1 ? <small>(per person)</small> : ""}
      </p>
    </>
  );
}
