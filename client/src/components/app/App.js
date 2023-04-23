import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { useState } from "react";

import MainPage from '../../pages/MainPage';
import LoginOrSing from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductPage";
import OneProductPage from "../../pages/OneProductPage";
import Owerlay from "../../pages/Owerlay";
import CabinetPage from "../../pages/CabinetPage";
import "./App.css";
import AddHouse from "../../pages/AddHouse";
import DebetCart from "../debetCard/DebetCard";

function App() {
    const [form, setForm] = useState('');
    return (
        <Router>
            <div >
                {/* <Header/> */}
                <Routes>
                    <Route path="/" element={<MainPage form={setForm}/>}/>

                    <Route path="/" element={<Owerlay form={setForm}/>}>
                        <Route path="/login" element={<LoginOrSing form={form}/>}/>

                        <Route path="/singup" element={<LoginOrSing form={form}/>}/>

                        <Route path="/productpage" element={<ProductsPage />} />
                        <Route
                            path="/productpage/:productId"
                            element={<OneProductPage />}
                        />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
