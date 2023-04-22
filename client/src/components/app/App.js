
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import MainPage from '../../pages/MainPage';
import LoginOrSing from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductPage";
import OneProductPage from "../../pages/OneProductPage";
import Owerlay from "../../pages/Owerlay";
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<MainPage/>}/>

          <Route path="/" element={<Owerlay/>}>
            <Route path="/login" element={<LoginOrSing/>}/>

            <Route path="/singup" element={<LoginOrSing/>}/>

            <Route path="/productpage" element={<ProductsPage/>}/>

            <Route path="/productpage/:productId" element={<OneProductPage/>}/>
          </Route>
        </Routes>
      </div>
    </Router>);
}

export default App;
