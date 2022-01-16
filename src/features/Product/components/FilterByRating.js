import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
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
      <InputLabel id="filter-by-rating">Options</InputLabel>
        <Select
        id="filter-by-rating"
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

export default FilterByRating;
