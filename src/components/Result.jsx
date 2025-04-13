import { useState } from "react";

export default function Result() {
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <p>
        <strong>Tip:</strong> ${tip} <small>(per person)</small>
      </p>
      <p>
        <strong>Total:</strong> ${total} <small>(per person)</small>
      </p>
    </>
  );
}
