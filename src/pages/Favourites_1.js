import { useState, useEffect } from "react";

function FavouritesPage() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  function updateCount() {
    // let c = count + 1;
    // setCount(c);
    setCount((c) => c + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={updateCount}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default FavouritesPage;
