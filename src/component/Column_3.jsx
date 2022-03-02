import "../css/Column.scss";
import { useSelector } from "react-redux";

function Column() {
  const data = useSelector((state) => state.FEData.column);
  return (
    <div className="column">
      <p className="title">{data.title}</p>
      <p className="subText">{data.subText}</p>
      <div className="box">
        {data.box.map((item, index) => (
          <div className="boxItem item1">
            <span className="number">{item.number}</span>
            <span className="text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;
