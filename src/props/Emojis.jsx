import React from "react";

function Emojis(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emo}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.mean}</dd>
    </div>
  );
}

export default Emojis;
