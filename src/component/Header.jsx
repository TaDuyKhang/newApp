import Logo from "../images/default-logo.png";
import Img1 from "../images/esff-min.jpg";
import "../css/Head.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../store/slice/userData";

function Header() {
  const [style, setStyle] = useState("block");
  const userData = useSelector((state) => state.userData);
  return (
    <div className="Header">
      <div className="Header_menu">
        <img src={Logo} alt="" />
        <div style={{ display: style }} className="Header_menu_text">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <span>{LoginButton(userData)}</span>
          <span>{LogoutButton(userData)}</span>
        </div>
        <button
          className="btn"
          onClick={() =>
            style == "none" ? setStyle("block") : setStyle("none")
          }
        >
          ...
        </button>
      </div>
      {/* <div className="Header_box">
        <div className="Box_left">
          <div className="Box_left_child">
            <div className="Box_left_top"></div>
            <span>VR headsets</span>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <div className="img_from">
              Image by &nbsp;
              <a href="">Freepik</a>
            </div>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="Box_right">
          <img src={Img1} alt="" />
        </div>
      </div> */}
    </div>
  );
}

function LoginButton(userData) {
  const dispatch = useDispatch();
  if (userData.userName === "Đăng Nhập") {
    return (
      <Link to="/login">
        <span>{userData.userName}</span>
      </Link>
    );
  } else {
    return <Link to="/userInformation">{userData.userName}</Link>;
  }
}

function LogoutButton(userData) {
  const dispatch = useDispatch();
  if (userData.userName != "Đăng Nhập") {
    return <button onClick={() => dispatch(Logout())}>Logout</button>;
  } else return null;
}

export default Header;
