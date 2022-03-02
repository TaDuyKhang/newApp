import "../css/Technology.scss";
import Img1 from "../images/dfdfdffff-min.jpg";
import Img4 from "../images/icon4.PNG";
import Img5 from "../images/icon5.PNG";
import { useSelector } from "react-redux";

function Technology() {
  const data = useSelector((state) => state.FEData.Technology);
  return (
    <div className="Technology">
      <div className="Header">
        <div className="Box_right">
          <img src={Img1} alt="" />
        </div>

        <div className="Box_left">
          <div className="Box_left_child">
            <span>{data.smallTitle}</span>

            <div className="text">{data.title}</div>

            <p>{data.subText}</p>

            <div className="img_from">
              Image form &nbsp;
              <a href="">{data.name}</a>
            </div>

            <div className="small_box">
              {data.boxText.map((item, index) => (
                <div className="small_box_top">
                  <img src={Img4} alt="" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
