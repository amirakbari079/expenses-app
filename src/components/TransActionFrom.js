import { useState } from "react";

const TransActionFrom = ({ addTransAction,setIsShow,isShow }) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: "",
    desc: "",
  });
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: [e.target.value] });
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    if(formValue.desc!=""){
      addTransAction(formValue)
      setIsShow(false)
      
    }
    
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValue.desc}
        placeholder="Title"
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValue.amount}
        placeholder="Amount"
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          id="expense"
          className="radioBtn"
        />
        <label htmlFor="expense">expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          id="income"
          className="radioBtn"
        />
        <label htmlFor="income">income</label>
      </div>
      <button type="submit" className="btn addBtn">Add</button>
    </form>
  );
};

export default TransActionFrom;
