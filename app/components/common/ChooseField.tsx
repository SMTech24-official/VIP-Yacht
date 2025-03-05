import React, { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  SelectChangeEvent,
} from "@mui/material";

const ControlledOpenSelect: React.FC = () => {
  const [age, setAge] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };

  return (
    <form autoComplete="off">
      <Button sx={{ display: "block", mt: 2 }} onClick={() => setOpen(true)}>
        Open the select
      </Button>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="controlled-open-select-label"
          id="controlled-open-select"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
};

export default ControlledOpenSelect;
