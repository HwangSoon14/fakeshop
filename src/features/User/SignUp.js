import React, { useState } from "react";
import "../../css/User.scss";
import White from "../../assets/whitebg.jfif";
import Avatar from "@mui/material/Avatar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import GithubAvatar from "../../assets/githubavt.jpg";
import { FormProvider, useForm } from "react-hook-form";
import TextInputField from "../../components/form-control/TextInputField";
import PasswordField from "../../components/form-control/PasswordField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { unwrapResult } from "@reduxjs/toolkit";
import { register } from "../../app/slice/userSlice";
const schema = yup.object().shape({
  userName: yup
    .string()
    .required("Please enter your name")
    .test(
      "Please enter as least as 2 word",
      "Please enter as least as 2 word",
      (value) => {
        return value.split(" ").length >= 2;
      }
    ),
  email: yup
    .string()
    .required("Please enter your email")
    .email("Please enter valid email"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(6, "Please enter as least as 6 character"),
  retypePassword: yup
    .string()
    .required("Please enter Confirm Password")
    .oneOf([yup.ref("password")], "Not correct , please enter again"),
});

const SignUp = ({ onSwap }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const action = register({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
        userName: data.userName,
      });
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      enqueueSnackbar("Register successfully.", { variant: "success" });
      navigate("/");
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        let message = "This email already exists";
        enqueueSnackbar(message, { variant: "error" });
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="user">
      <div className="user-container">
        <div className="user-textContainer">
          <Avatar src={GithubAvatar} alt="avt" />
          <span className="user__text">Sign Up</span>
        </div>
        <div className="user-form">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <TextInputField name="userName" label="Full Name" />
              <TextInputField name="email" label="Email" />
              <PasswordField name="password" label="Password" />
              <PasswordField name="retypePassword" label="Confirm Password" />
              <Button
                style={{ marginTop: 20 , backgroundColor: '#028082'}}
                type="submit"
                variant="contained"
                fullWidth
              >
                Register
              </Button>
            </form>
          </FormProvider>
        </div>
        <div className="user-swapContainer">
          <span onClick={() => onSwap(true)}>
            Don't have an account? Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
