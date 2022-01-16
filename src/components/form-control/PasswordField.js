import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FilledInput,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  notErrorBorder: {
    border: "3px solid #33eb91",
    borderRadius: "4px",
  },
  errorBorder: {
    border: "3px solid red",
    borderRadius: "4px",
  },
  inherit: {
    border: "0px solid black",
  },
}));

const PasswordField = ({ label, name }) => {
  const classes = useStyles();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  const { formState } = useFormContext();
  const hasError = errors[name];
  const hasTouched = formState.touchedFields[name];

  return (
    <>
      <FormControl margin="normal" fullWidth variant="filled">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <FilledInput
              {...field}
              type={showPassword ? "text" : "password"}
              InputProps={{ color: "success" }}
              inputProps={
                !!hasTouched
                  ? !!hasError
                    ? { className: classes.errorBorder }
                    : { className: classes.notErrorBorder }
                  : { className: classes.inherit }
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
          label={label}
        />
        <FormHelperText error={!!hasError}>
          {errors[name]?.message}
        </FormHelperText>
      </FormControl>
    </>
  );
};

export default PasswordField;
