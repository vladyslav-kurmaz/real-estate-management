// import Header from '../header/header';

import {
  BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from '../../pages/MainPage';
import LoginOrSing from "../../pages/Login";
import Footer from '../footer/footer';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<MainPage/>}/>

          <Route path="/exit" element={<LoginOrSing/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
