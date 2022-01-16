import React from "react";
import "../css/AddButton.scss";
const AddButton = ({ text , onClickButton , disable}) => {
  const handleClick = () => {
    if(!onClickButton) return;
    onClickButton();
  }
  return <button disabled={disable} onClick={handleClick} className="btn41-43 btn-41">{text}</button>;
};

export default AddButton;
