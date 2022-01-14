import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NotFound from "../../../components/NotFound";
import '../../../css/Admin.scss';
import AddForm from "../components/AddForm";
import DeleteForm from '../components/DeleteForm'
import UpdateForm from '../components/UpdateForm';
const AdminPage = () => {
  const user = useSelector((state) => state.user.users);
  const products = useSelector(state => state.products.products);
  const [isAdd , setIsAdd ] = useState(false);
  const [isDelete , setIsDelete ] = useState(false);
  const [isUpdate , setIsUpdate ] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (user.email === "admin@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user.email]);
  const onAddDisplay = () => {
    setIsAdd(prev => !prev);
  }
  const onDeleteDisplay = () => {
    setIsDelete(prev => !prev);
  }
  const onUpdateDisplay = () => {
    setIsUpdate(prev => !prev);
  }
  return <div>{isAdmin ?
     <div className="admin">
          <div className="admin-container">
              <div className="admin-btnContainer">
                <Button onClick={onAddDisplay} variant="contained" startIcon={<AddCircleOutlineIcon />} size="large" fullWidth>
                 ADD PRODUCT
                </Button>
              {isAdd && <AddForm />}
              </div>
              <div className="admin-btnContainer">
                <Button onClick={onDeleteDisplay} variant="contained" startIcon={<DeleteForeverIcon />} size="large" fullWidth>
                 DELETE PRODUCT
                </Button>
                {isDelete && <DeleteForm /> }
              </div>
              <div className="admin-btnContainer">
                <Button onClick={onUpdateDisplay} className="admin__btn" variant="contained" startIcon={<ModeEditOutlineIcon />} size="large" fullWidth>
                 EDIT PRODUCT
                </Button>
                {isUpdate && <UpdateForm />}
              </div>
          </div>
        </div> 
  : 
  <NotFound />}
  </div>;
};

export default AdminPage;
