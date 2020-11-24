import React from "react";
import "./style.css";

function FriendCard(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.friend} />
      </div>
      
    </div>
  );
}

export default FriendCard;
