import { useEffect, useState } from "react";

const TransActionComponents = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTrx, setFilteredTnx] = useState(props.transAction);

  const filterTransaction = (search) => {
    if (!search || search === "") {
      setFilteredTnx(props.transAction);
      return;
    }
    const filterd = props.transAction.filter((q) =>
      q.desc.toString().toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filterd);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransaction(e.target.value);
  };

  useEffect(() => {
    filterTransaction(searchItem);
  }, [props.transAction]);

const filterBy=(data)=>{
  if(!data || data===""){
    return;
  }
  const filterByType = props.transAction.filter((q) =>
      q.type.toString().includes(props.filterBy)
    );
    console.log(filterByType)
    setFilteredTnx(filterByType);
}

  useEffect(() => {
    filterBy(props.filterBy)
  }, [props.filterBy]);

  return (
    <section>
      <input
        type="text"
        value={searchItem}
        onChange={changeHandler}
        placeholder="🔎earch..."
        className="searchInput"
      />
      {filteredTrx.map((item) => (
        <div
          key={item.id}
          className="transAction"
          style={{
            borderRight:
              item.type == "expense"
                ? "2px solid #fcab01"
                : "2px solid #2aa10f",
          }}
        >
          <span>{item.desc}</span>
          <span>{item.amount}$</span>
        </div>
      ))}
    </section>
  );
};

export default TransActionComponents;
