import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MenuIcon from "@mui/icons-material/Menu";
import { ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { logout } from "../app/slice/userSlice";
export default function TemporaryDrawer() {
  const user = useSelector((state) => state.user.users);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (user.email === "admin@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user.email]);
  const [state, setState] = useState({
    right: false,
  });
  const anchor = "right";
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };
  const list = (anchor) => (
    <Box
      sx={400}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {(isAdmin) && (<Link to="/admin">
          <ListItem button>
            <ListItemIcon>
              <AdminPanelSettingsIcon htmlColor="black" />
            </ListItemIcon>
            <ListItemText primary="Admin" />
          </ListItem>
        </Link>)}
        <Link to="/cart">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon htmlColor="black" />
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
        </Link>
        <ListItem button onClick={handleLogOut}>
            <ListItemText primary="Log Out" />
          </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(anchor, true)}>
        <MenuIcon fontSize="large" htmlColor="black" />
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
