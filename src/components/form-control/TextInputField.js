import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const TextInputField = ({ name, label }) => {
  const {
    control,
    formState: { errors , isDirty},
  } = useFormContext();
  
  const hasError = errors[name];
  
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field  }) => (
          <TextField
            {...field}
            margin="normal"
            label={label}
            fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
          />
        )}
      />
    </>
  );
};

export default TextInputField;
