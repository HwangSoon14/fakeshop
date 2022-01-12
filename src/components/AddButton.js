import React from "react";
import "../css/AddButton.scss";
const AddButton = ({ text , onClickButton}) => {
  const handleClick = () => {
    if(!onClickButton) return;
    onClickButton();
  }
  return <button onClick={handleClick} className="btn41-43 btn-41">{text}</button>;
};

export default AddButton;
