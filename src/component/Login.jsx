import React, { useState } from "react";
import { checkLogin, getUserData } from "../data/BEFake";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Login, changeToken } from "../store/slice/userData";

function LoginPage(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const [data, setData] = useState();
  const state = useSelector((state) => state.userData.userName);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const passData = { username: userName, passwork: passWord };
    // props.passData(passData);
    postData("http://134.209.182.27:5001/auth/log-in", {
      // email: "devkimal@b13technology.com",
      // password: "12345678910111213",
      email: userName,
      password: passWord,
    }).then((data) => {
      setData(data);
      console.log("dataa", data);
      if (data.token) {
        dispatch(changeToken(data.token));
        dispatch(Login(data));
        history.push("admin");
      } else {
        alert("sai thong tin");
      }
    });
  };

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // const login = () => {
  //   const jwt = checkLogin(userName, passWord);
  //   if (jwt) {
  //     dispatch(changeToken(jwt));
  //     setData(getUserData(jwt));
  //   } else {
  //     alert("sai thong tin");
  //   }
  //   console.log("jwt", jwt);
  // };

  // useEffect(() => {
  //   if (data) {
  //     console.log("Login success");
  //     dispatch(Login(data));
  //     history.push("admin");
  //   } else {
  //     console.log("wrong");
  //   }
  // }, [data]);

  return (
    <form className="Login_form" onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          className="Login_input"
          type="text"
          name="userName"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          className="Login_input"
          type="text"
          name="passWord"
          value={passWord}
          onChange={(event) => setPassWord(event.target.value)}
        />
      </div>
      <button>Đăng nhập</button>
    </form>
  );
}

export default LoginPage;
