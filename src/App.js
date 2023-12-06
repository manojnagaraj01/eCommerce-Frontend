// import logo from ./logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import RoutesCompo from './Routes/RoutesCompo';
import store from './Redux/Store/Store';
// import Registration from './Components/Login & Signup/Register';
function App() {
  return (
    <>
      <Provider store={store}>
        <RoutesCompo/>

      {/* <Registration/> */}
      </Provider>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
