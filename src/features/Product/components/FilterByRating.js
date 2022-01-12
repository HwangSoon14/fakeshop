import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import '../../../css/Filters.scss';
const FilterByRating = ({onChange}) => {


  const rating = useSelector(state => state.products.products);
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
      if(!onChange) return;
    setAge(event.target.value);
    onChange(event.target.value);
  };
  return (
    <div className="filterRating">
        <span className="filterRating__label">Filter By Rating</span>
      <FormControl fullWidth>
        <Select
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Lowest</MenuItem>
          <MenuItem value={20}>Highest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterByRating;
