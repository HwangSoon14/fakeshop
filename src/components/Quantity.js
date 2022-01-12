import React, { useEffect, useState } from "react";
import "../css/Quantity.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Quantity = ({ upDateQuantity, onIncrease, onDecrease }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity">
      <div
        className="quantity-minus"
        onClick={() => {
          if (quantity === 1) return;
          setQuantity((prev) => prev - 1);
          if (upDateQuantity) {
            upDateQuantity(quantity - 1);
          }
          if (onDecrease) {
            onDecrease();
          }
        }}
      >
        <button>
          <RemoveIcon fontSize="small" />
        </button>
      </div>
      <div className="quantity-value">
        {
          <input
            type="text"
            readOnly
            value={quantity}
            onChange={(value) => setQuantity(value)}
          />
        }
      </div>
      <div
        className="quantity-plus"
        onClick={() => {
          setQuantity((prev) => prev + 1);
          if (upDateQuantity) {
            upDateQuantity(quantity + 1);
          }
          if (onIncrease) {
            onIncrease();
          }
        }}
      >
        <button>
          <AddIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
