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
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { login } from "../../app/slice/userSlice";
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Hãy nhập Email của bạn !")
    .email("Hãy nhập Email hợp lệ !"),
  password: yup.string().required("Hãy nhập Password của bạn !"),
});

const SignIn = ({ onSwap }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();
  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const action = login({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      });
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      enqueueSnackbar("Login Successfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      if (error.message === "Request failed with status code 400") {
        let message = "Login Failed";
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
              <TextInputField name="email" label="Email" />
              <PasswordField name="password" label="Password" />
              <Button
                style={{ marginTop: 20 ,  backgroundColor: '#028082' }}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </form>
          </FormProvider>
        </div>
        <div className="user-swapContainer">
          <span onClick={() => onSwap(false)}>
            Don't have an account? Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
