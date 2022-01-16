import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import TextInputField from "../../../components/form-control/TextInputField";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import "../../../css/UpdateForm.scss";
import UpdateNewForm from "./UpdateNewForm";
import { FamilyRestroomOutlined } from "@mui/icons-material";
const schema = yup.object().shape({
  id: yup
    .number()
    .required("Hãy nhập ID")
    .positive("Hãy nhập ID hợp lệ")
    .integer("Hãy Nhập ID hợp lệ"),
});

const UpdateForm = () => {
  const products = useSelector((state) => state.products.products);
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);
  const [isShowError, setIsShowError] = useState(false);
  const [isShowProduct, setIsShowProduct] = useState(false);
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      id: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    const { id } = value;
    const thisIndex = products.findIndex((x) => x.id === id);
    if (thisIndex >= 0) {
      setIsShowError(false);
      setProduct(products[thisIndex]);
      setIsShowProduct(true);
    } else {
      setIsShowError(true);
      setIsShowProduct(false);
    }
  };
  return (
    <div className="updateForm">
      <div className="updateForm-container">
        <span className="updateForm__title">UPDATE PRODUCT</span>
        <span className="updateForm__text">
          Nhập ID Product Bạn Muốn Cập Nhật
        </span>
        <div className="updateForm-form">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <TextInputField name="id" label="ID Product" />
              <Button type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
        {isShowError && (
          <div className="updateForm-errorContainer">
            <span className="updateForm__errorText">
              KHÔNG TÌM THẤY SẢN PHẨM NÀY TRONG CỬA HÀNG
            </span>
          </div>
        )}
        {isShowProduct && (
          


          <div className="updateForm-newContainer">
            <div className="updateForm-imgContainer">
              <img src={product.image} alt="product_image"/>
            </div>
            <UpdateNewForm product={product} />
          </div>

        )}
      </div>
    </div>
  );
};

export default UpdateForm;
