import { useState } from "react";
import "./index.css";

const App = () => {
  const [price, setPrice] = useState(0);
  const [yourTip, setYourTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const handleBill = (e) => {
    const inputVal = e.target.value;
    setPrice(inputVal);
  };

  const handleTip = (e) => {
    const yourTip = Number(e.target.value);
    setYourTip(yourTip);
  };

  const handleFriendTip = (e) => {
    const friendTip = Number(e.target.value);
    setFriendTip(friendTip);
  };

  const handleReset = () => {
    setPrice(0);
    setYourTip(0);
    setFriendTip(0);
  };

  return (
    <div className="container">
      <div className="card">
        <Bill price={price} onHandleBill={handleBill} />
        <CalcTip onHandleTip={handleTip} selectedValue={yourTip}>
          How did you like the service?
        </CalcTip>
        <CalcTip onHandleTip={handleFriendTip} selectedValue={friendTip}>
          How did your friend like the service?
        </CalcTip>
        <CalcTotal
          price={price}
          yourTip={yourTip}
          friendTip={friendTip}
          onHandleReset={handleReset}
        />
      </div>
    </div>
  );
};

const Bill = ({ price, onHandleBill }) => {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="number"
        min={0}
        value={price || ""}
        onChange={(e) => onHandleBill(e)}
      ></input>
    </>
  );
};

const CalcTip = ({ children, onHandleTip, selectedValue }) => {
  return (
    <>
      <p>{children}</p>
      <select onChange={(e) => onHandleTip(e)} value={selectedValue}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely amazing! (20%)</option>
      </select>
    </>
  );
};

const CalcTotal = ({ price, yourTip, friendTip, onHandleReset }) => {
  const tip = () => (Number(price) * (Number(yourTip) + Number(friendTip))) / 2;

  return (
    <div className="total">
      {price > 0 ? (
        <>
          <h1>
            You pay ${(Number(price) + tip()).toFixed(2)} ($
            {price} + ${tip().toFixed(2)} tip)
          </h1>
          <button onClick={onHandleReset}>Reset</button>
        </>
      ) : null}
    </div>
  );
};

export default App;
