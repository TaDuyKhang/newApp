import Icon1 from "../images/icon1.PNG";
import Icon2 from "../images/icon2.PNG";
import Icon3 from "../images/icon3.PNG";
import "../css/Row_3.scss";
import { useSelector } from "react-redux";

function Row_3() {
  const data = useSelector((state) => state.FEData.Row_3);

  return (
    <div className="Row_3">
      <p className="title">{data.title}</p>
      <p className="subText">{data.subText}</p>

      <div className="box">
        {/* <List /> */}
        {data.box.map((value, index) => (
          <div className="boxItem">
            <img src={Icon1} alt="" />
            <p>{value.title}</p>
            <span>{value.subText}</span>
            <a href="">{value.button}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row_3;
