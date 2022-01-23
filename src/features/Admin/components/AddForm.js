import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useSnackbar } from 'notistack';
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { addNewProduct } from "../../../app/slice/productSlice";
import TextInputField from "../../../components/form-control/TextInputField";
import "../../../css/AddForm.scss";

const AddForm = () => {
  const productsLength = useSelector((state) => state.products.products.length);
  const { enqueueSnackbar } = useSnackbar();
  const schema = yup.object().shape({
    category: yup
      .string()
      .required("Hãy nhập mục này")
      .min(2, "Hãy nhập nhiều hơn 2 từ"),
    id: yup
      .number()
      .required("Hãy nhập ID")
      .positive("Hãy nhập ID hợp lệ")
      .integer("Hãy Nhập ID hợp lệ")
      .test("ID này đã tồn tại", "ID này đã tồn tại", (value) => {
        return value > productsLength;
      })
      .typeError('Hãy nhập giá trị hợp lệ'),
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
    rate: yup
      .number()
      .required("Hãy nhập mục này")
      .positive("Hãy nhập rating hợp lệ")
      .moreThan(0, "Rating không thể bằng 0")
      .lessThan(6, "Rating phải nhỏ hơn hoặc bằng 5")
      .typeError('Hãy nhập giá trị hợp lệ'),
    count: yup
      .number()
      .required("Hãy nhập mục này")
      .positive("Hãy nhập số sản phẩm hợp lệ")
      .moreThan(-1, "Sản phẩm phải lớn hơn hoặc bằng 0")
      .integer("Số sản phẩm không được lẻ")
      .typeError('Hãy nhập giá trị hợp lệ'),
  });
  const dispatch = useDispatch();
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      category: "",
      id: "",
      title: "",
      image: "",
      desc: "",
      price: "",
      rate: "",
      count: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (value) => {
    
    dispatch(addNewProduct({item: value}))
    enqueueSnackbar("Add New Product Successfully", { variant: "success" });

  };
  return (
    <div className="addForm">
      <div className="addForm-container">
        <span className="addForm__title">ADD PRODUCT</span>
        <div className="addForm-form">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
              <TextInputField name="category" label="Category" />
              <TextInputField name="id" label="ID Product" />
              <TextInputField name="title" label="Title" />
              <TextInputField name="image" label="Url Image" />
              <TextInputField name="price" label="Price" />
              <TextInputField name="desc" label="Description" />
              <TextInputField name="rate" label="Rating" />
              <TextInputField name="count" label="Count Product" />
              <Button style={{marginTop: 20 , backgroundColor: '#028082'}}  type="submit" variant="contained" fullWidth>
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
