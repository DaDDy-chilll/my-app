// import React from "react";
// import ReactDOM from "react-dom";
// const root = ReactDOM.createRoot(document.getElementById("root"));

//!----------------- JSX--------------------
// const name = "DaDDy";
// const lname = "Chill";
// const img = "https://picsum.photos/200";
// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black",
// };
// customStyle.color = "blue";
// // const luckyno = 7;
// root.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="true">
//       hello {name + " " + lname}
//     </h1>
//     <h1>
//       {" "}
//       hello {name} {lname}
//     </h1>
//     <h1>Hello {`${name} ${lname}`}</h1>
//     <p style={customStyle}>
//       Your lucky number is {Math.floor(Math.random() * 10)}
//     </p>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//     <div>
//       <img src={img + "?grayscale"} alt="" />
//     </div>
//   </div>
// );
//todo Pratical
// const name = "DaDDy Chill";
// const day = new Date();
// const year = day.getFullYear();
// ReactDOM.render(
//   <div>
//     <p>Created by {name}</p>
//     <p>Copyright {year}</p>
//   </div>,
//   document.getElementById("root")
// );
//todo Pratical
const date = new Date(2022, 1, 1, 1);
const currentTime = date.getHours();
console.log(currentTime);
let greeting;
const coustomhead = {
  color: "",
};
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
// root.render(
//   <h1 className="heading" style={coustomhead}>
//     {" "}
//     {greeting}
//   </h1>
// );
