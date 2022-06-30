import React from "react";
// import contacts from "./contact";
// import Avatar from "./Avatar";
// import Card from "./Card";

//!----------start props
// function creatCard(contact) {
//     return <Card
//     id={contact.id}
//     key={contact.id}
//     name={contact.name}
//     img={contact.imgURL}
//     tel={contact.phone}
//     email={contact.email}
//     />
//   }
// function App() {
//     return (
//       <div>
//         <h1 className="heading">My Contacts</h1>
//         <Avatar img="https://qph.cf2.quoracdn.net/main-qimg-53b1359beed5b480fb0406437f82f15f-pjlq" />
//         {contacts.map(creatCard)}
//          {/* <Card
//           name={contacts[0].name}
//           img={contacts[0].imgURL}
//           tel={contacts[0].phone}
//           email={contacts[0].email}
//         /> */}
//         {/* <Card
//           name={contacts[1].name}
//           img={contacts[1].imgURL}
//           tel={contacts[1].phone}
//           email={contacts[1].email}
//         />
//         <Card
//           name={contacts[2].name}
//           img={contacts[2].imgURL}
//           tel={contacts[2].phone}
//           email={contacts[2].email}
//         />  */}
//       </div>
//     );
//   }
//   export default App;
//!----------end props

//todo start props praticle
import emojipedia from "./emojipedia.js";
import Emojis from "./Emojis";
function createEmoji(emoji) {
  return (
    <Emojis
      key={emoji.id}
      name={emoji.name}
      emo={emoji.emoji}
      mean={emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;

//todo end props praticle
