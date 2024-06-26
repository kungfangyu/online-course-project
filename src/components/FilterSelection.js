/*
 * @Author: Fangyu Kung
 * @Date: 2024-06-26 16:08:08
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-26 18:19:56
 * @FilePath: /online-course-project/src/components/FilterSelection.js
 */
import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const FilterSelection = ({ filter, setFilter }) => {
  return (
    <Box
      style={{
        border: "1px solid #dee4ec",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <FormGroup>
        {filter.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilter([...filter, option]);
                    } else {
                      setFilter(filter.filter((item) => item !== option));
                    }
                  }}
                />
              }
              label={option}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
};

export default FilterSelection;
