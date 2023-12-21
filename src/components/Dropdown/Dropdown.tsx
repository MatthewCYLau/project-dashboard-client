import React, { ReactNode } from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

import useStyles from "./Dropdown.style";

type DropdownProps = {
  labelId: string;
  id: string;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<{ value: string | unknown }>) => void;
  renderValue: (value: unknown) => ReactNode;
  options: string[];
  disabled: boolean;
};

const Progress: React.FunctionComponent<DropdownProps> = ({
  labelId,
  id,
  value,
  label,
  onChange,
  renderValue,
  options,
  disabled,
}) => {
  const styles = useStyles();

  return (
    <>
      <InputLabel id="sector-label">{label}</InputLabel>
      <Select
        className={styles.dropdown}
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        renderValue={renderValue}
        disabled={disabled}
      >
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </>
  );
};

export default Progress;
