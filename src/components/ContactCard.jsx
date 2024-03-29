import React from "react";
import user from "../images/Teejay.jpg"

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div className="header">{email}</div>
      </div>
      <i
        style={{ color: "red", marginTop: "7px" }}
        className="trash alternate outline icon "
      ></i>
    </div>
  );
};

export default ContactCard;
