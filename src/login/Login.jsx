import React from "react";
import Input from "./Input";

function Login(porps) {
  return (
    <form action="#" className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {porps.isRegisterd === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{porps.isRegisterd ? "Login" : "SignUp"}</button>
    </form>
  );
}
export default Login;
