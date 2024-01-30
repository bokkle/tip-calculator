import { useState } from "react";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <Bill />
        <CalcTip>How did you like the service?</CalcTip>
        <CalcTip>How did your friend like the service?</CalcTip>
        <CalcTotal />
      </div>
    </div>
  );
};

const Bill = () => {
  const [price, setPrice] = useState(0);

  const handleBill = (e) => {
    const inputVal = e.target.value
    console.log(inputVal)
    setPrice(inputVal)
  }

  return (
    <>
      <p>How much was the bill?</p>
      <input type="number" value={price} onChange={(e) => handleBill(e)}></input>
    </>
  );
};

const CalcTip = ({ children }) => {
  return (
    <>
      <p>{children}</p>
      <select>
        <option>Dissatisfied</option>
        <option>It was okay</option>
        <option>It was good</option>
        <option>Absolutely amazing!</option>
      </select>
    </>
  );
};

const CalcTotal = () => {
  return (
    <div className="total">
      <h1>You pay $92 ($80 + $12 tip)</h1>
      <button>Reset</button>
    </div>
  );
};

export default App;
