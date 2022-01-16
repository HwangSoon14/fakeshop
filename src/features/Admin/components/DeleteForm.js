import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import TextInputField from "../../../components/form-control/TextInputField";
import { Button } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import "../../../css/DeleteForm.scss";
import { deleteProduct } from "../../../app/slice/productSlice";
import ModalConfirm from "../../../components/ModalConfirm";

const schema = yup.object().shape({
  id: yup
    .number()
    .required("Hãy nhập ID")
    .positive("Hãy nhập ID hợp lệ")
    .integer("Hãy Nhập ID hợp lệ"),
});

const DeleteForm = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const products = useSelector((state) => state.products.products);
  const { enqueueSnackbar } = useSnackbar();
  const [product, setProduct] = useState({});
  const [isShowError, setIsShowError] = useState(false);
  const [isShowProduct, setIsShowProduct] = useState(false);
  const dispatch = useDispatch();
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      id: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    const thisIndex = products.findIndex((x) => x.id === value.id);
    if (thisIndex >= 0) {
      const thisProduct = products[thisIndex];
      setIsShowError(false);
      setIsShowProduct(true);
      setProduct(thisProduct);
    } else {
      setIsShowError(true);
      setIsShowProduct(false);
    }
  };
  const handleDeleteProduct = () => {
      dispatch(deleteProduct(product.id))
      enqueueSnackbar("Delete Product Successfully", { variant: "success" });
  }
  return (
    <div className="deleteForm">
      <div className="deleteForm-container">
        <span className="deleteForm__title">DELETE PRODUCT</span>
        <span className="deleteForm__text">Nhập ID Product Bạn Muốn Xóa</span>
        <div className="deleteForm-form">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <TextInputField name="id" label="ID Product" />
              <Button style={{marginTop: 20 , backgroundColor: '#028082'}} type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
        {isShowProduct && (
          <div className="deleteForm-itemContainer">
            <span className="deleteForm__title">Thông Tin Sản Phẩm</span>
            <div className="deleteForm-imgContainer">
              <img src={product.image} alt="product__Img" />
            </div>
            <div className="deleteForm-content">
              <div className="deleteForm-content__info">
                <span>ID: {product.id}</span>
                <span>
                  Price:
                  <span className="deleteForm__price">{product.price}$</span>
                </span>
              </div>
              <div className="deleteForm-content__title">
                <span>Title: {product.title}</span>
              </div>
            </div>
            <Button style={{backgroundColor: '#028082'}} onClick={() => setOpen(prev => !prev)} variant="contained" fullWidth>
              CONFIRM DELETE
            </Button>
          </div>
        )}
        {isShowError && (
          <div className="deleteForm-errorContainer">
            <span className="deleteForm__errorText">
              KHÔNG TÌM THẤY SẢN PHẨM NÀY TRONG CỬA HÀNG
            </span>
          </div>
        )}
      </div>
      <ModalConfirm open={open} handleClose={handleClose} onDelete={handleDeleteProduct}/>
    </div>
  );
};

export default DeleteForm;
