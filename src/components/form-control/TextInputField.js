import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  notErrorBorder: {
    border: "3px solid #33eb91",
    borderRadius: '4px',
  },
  errorBorder: {
    border: "3px solid red",
    borderRadius: '4px',
  },
  inherit: {
    border: '0px solid black'
  },
}));


const TextInputField = ({ name, label }) => {
  const classes = useStyles();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { formState} = useFormContext();
  const hasError =  errors[name];
  const hasTouched = formState.touchedFields[name];
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field  }) => (
          <TextField
            {...field}
            variant="filled"
            margin="normal"
            label={label}
            fullWidth
            error={!!hasError}
            helperText={errors[name]?.message}
            InputProps={{ color: 'success' }}
            inputProps={
              (!!hasTouched) ?  
              (!!hasError) ? { className: classes.errorBorder } : { className: classes.notErrorBorder }
              :
              {className: classes.inherit }
            }
            
          />
        )}
      />
    </>
  );
};

export default TextInputField;
