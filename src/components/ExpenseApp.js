import { useEffect, useState } from "react";
import "../App.css";
import OverViewComponent from "./OverViewComponent";
import TransActionComponents from "./TransActionComponents";

const ExpenseApp = (props) => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);
  const [filterBy, setFilterBy] = useState("");


  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transAction.forEach((t) => {
      t.type == "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
  console.log("adad");

    });
    setExpense(exp);
    setIncome(inc);
  }, [transAction]);
  const addTransAction = (formValue) => {
    setTransAction([...transAction, { ...formValue, id: Date.now() }]);
  };

  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransAction={addTransAction}
        setFilterBy={setFilterBy}
      />
      <TransActionComponents transAction={transAction} filterBy={filterBy}/>
    </section>
  );
};

export default ExpenseApp;
