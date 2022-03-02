import jsonwebtoken from "jsonwebtoken";
import User from "./user.json";

const salt = "shhhhh";

export function checkLogin(userName, passWord) {
  const userData = User.user.find(
    (user) => user.username === userName && user.password === passWord
  );
  console.log("userData", userData);

  if (userData) {
    const token = jsonwebtoken.sign(userData, salt);
    return token;
  } else {
    console.error("can not get userData");
    return undefined;
  }
}

export function getUserData(token) {
  const decoded = jsonwebtoken.verify(token, salt);
  console.log("jwt", decoded.username);
  const userData = User.user.find(
    (user) =>
      user.username === decoded.username && user.password === decoded.password
  );
  return userData;
}
