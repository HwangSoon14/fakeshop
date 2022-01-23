import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import TextInputField from "../../../components/form-control/TextInputField";
import { Button } from "@mui/material";
import {updateProduct} from '../../../app/slice/productSlice'
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("Hãy nhập mục này")
    .min(2, "Hãy nhập nhiều hơn 2 từ"),
  image: yup.string().required("Hãy nhập mục này").url("Hãy nhập url hợp lệ"),
  desc: yup
    .string()
    .required("Hãy nhập mục này")
    .min(2, "Hãy nhập nhiều hơn 2 từ"),
  price: yup
    .number()
    .required("Hãy nhập mục này")
    .positive("Giá tiền không được âm")
    .moreThan(0, "Gía tiền phải lớn hơn 0")
    .lessThan(10000000000, "Hãy nhập giá tiền hợp lệ")
    .typeError('Hãy nhập giá trị hợp lệ'),
});

const UpdateNewForm = ({ product }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      title: "",
      image: "",
      desc: "",
      price: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    dispatch(updateProduct({id: product.id , value}))
    enqueueSnackbar("Update Product Successfully", { variant: "success" });
  };
  return (
    <div className="updateNewForm">
      <span className="updateNewForm-title">Cập Nhật Thông Tin Mới</span>
      <div className="updateNewForm-form">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <TextInputField name="title" label="Title" />
              <TextInputField name="image" label="Url Image" />
              <TextInputField name="price" label="Price" />
              <TextInputField name="desc" label="Description" />
              <Button style={{marginTop: 20 , backgroundColor: '#028082'}} type="submit" variant="contained" fullWidth>
                Confirm Update
              </Button>
            </form>
          </FormProvider>
        </div>
    </div>
  );
};

export default UpdateNewForm;
