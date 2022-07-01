import React from "react";
import Login from "./Login";
let isLogin = false;
let userRegistered = true;
function App() {
  return (
    <div className="container">
      {isLogin ? <h1>Hello</h1> : <Login isRegisterd={userRegistered} />}
    </div>
  );
}
export default App;
