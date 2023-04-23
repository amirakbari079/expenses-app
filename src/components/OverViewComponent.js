import { useState } from "react";
import TransActionFrom from "./TransActionFrom";

const OverViewComponent = ({
  expense,
  income,
  addTransAction,
  setFilterBy,
}) => {
  const [isShow, setIsShow] = useState(false);
  const [changeExpenseCss, setChangeExpenseCss] = useState(false);
  const [changeIncomeCss, setChangeIncomeCss] = useState(false);
  const onClickHandler = (type) => {
    setFilterBy(type);
    if (type == "expense") {
      setChangeExpenseCss(!changeExpenseCss);
      setChangeIncomeCss(false);
    } else if (type == "income") {
      setChangeIncomeCss(!changeIncomeCss);
      setChangeExpenseCss(false);
    }
  };
  return (
    <div>
      <div className="topSection">
        <span className="blance">Blance : {income - expense} $</span>
        <button
          className={isShow ? "btn cancel" : "btn addBtn"}
          onClick={() => setIsShow((prevstate) => !prevstate)}
        >
          {isShow ? "cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionFrom
          addTransAction={addTransAction}
          setIsShow={setIsShow}
          isShow={isShow}
        />
      )}
      <div className="resultSection">
        <div
          className={
            changeExpenseCss ? "expenseBox expenseBoxClicked" : "expenseBox"
          }
          onClick={() => onClickHandler("expense")}
        >
          Expense <span style={{ color: "#dd9700" }}>{expense} $</span>
        </div>
        <div
          className={
            changeIncomeCss
              ? "expenseBox  incomeBox incomeBoxClicked"
              : "expenseBox  incomeBox"
          }
          onClick={() => onClickHandler("income")}
        >
          Income <span>{income} $</span>
        </div>
      </div>
    </div>
  );
};

export default OverViewComponent;
