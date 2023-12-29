import React from "react";
import { Provider } from "react-redux";
import RoutesCompo from "./Routes/RoutesCompo";
import store from "./Store/configureStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 10000, top: "100px", right: "50px" }}
      />
      <ToastContainer style={{ zIndex: 10000, top: "100px", right: "50px" }} />
      <Provider store={store}>
        <RoutesCompo />
      </Provider>
    </>
  );
}

export default App;
