import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import '../../../css/Filters.scss';
const FilterByPrice = ({onChange}) => {

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
      if(!onChange) return;
    setAge(event.target.value);
    onChange(event.target.value);
  };
  return (
    <div className="filterPrice">
        <span className="filterPrice__label">Filter By Price</span>
      <FormControl fullWidth >
        <InputLabel id="filter-by-price">Options</InputLabel>
        <Select
          id="filter-by-price"
          value={age}
          onChange={handleChange}
          label="Options"
        >
          <MenuItem value={10}>Lowest</MenuItem>
          <MenuItem value={20}>Highest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterByPrice;
