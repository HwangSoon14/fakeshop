import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import App from "./App";
import store from "./app/store";
import { Button } from "@mui/material";

const notistackRef = React.createRef();
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          iconVariant={{
            success: "✅",
            error: "✖️",
            warning: "⚠️",
            info: "ℹ️",
          }}
          ref={notistackRef}
          action={(key) => (
            <Button style={{color: 'red'}} onClick={onClickDismiss(key)}>Close</Button>
          )}
        >
          <App />
        </SnackbarProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
