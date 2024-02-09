import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import AboutUs from "./components/About/AboutUs";
import CustomNavbar from "./components/Home/Navbar/CustomNavbar";
import SignalGold from "./components/Registration/SignalGold";
import SignalLife from "./components/Registration/SignalLife";
import SignalPremier from "./components/Registration/SignalPremier";
import SignalFamily from "./components/Registration/SignalFamily";
import SingleIFamily from "./components/Registration/SingleIFamily";
import SingleILife from "./components/Registration/SingleILife";
import Login from "./components/Authentication/Login";
import Footer from "./components/Home/Footer/Footer";
function App() {
  return (
    <div className="App mx-auto">
      <CustomNavbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/gold' element={<SignalGold/>}></Route>
          <Route path='/life' element={<SignalLife/>}></Route>
          <Route path='/premier' element={<SignalPremier/>}></Route>
          <Route path='/family' element={<SignalFamily/>}></Route>
          <Route path='/ifamily' element={<SingleIFamily/>}></Route>
          <Route path='/ilife' element={<SingleILife/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
