import React from "react";

function nowTime() {
  const date = new Date(2022, 1, 1, 1);
  const currentTime = date.getHours();
  return currentTime;
}
function Heading() {
  let greeting;
  const coustomhead = {
    color: "",
  };
  let currentTime = nowTime();
  if (currentTime < 12) {
    greeting = "Good Morining";
    coustomhead.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    coustomhead.color = "green";
  } else {
    greeting = "Good Night";
    coustomhead.color = "blue";
  }
  return (
    <h1 className="heading" style={coustomhead}>
      {" "}
      {greeting}
    </h1>
  );
}
export default Heading;
