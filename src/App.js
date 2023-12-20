import { Provider } from "react-redux";
import RoutesCompo from "./Routes/RoutesCompo";
import store from "./Store/configureStore";

// import LoginSignup from './Login & Signup/Login';
function App() {
  return (
    <>
    
      <Provider store={store}>
        
        <RoutesCompo />
      </Provider>
      {/* <Cart/> */}
    </>
  );
}

export default App;
