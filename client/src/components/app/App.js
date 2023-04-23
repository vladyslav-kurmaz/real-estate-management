import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import {useEffect, useState} from "react";

import MainPage from '../../pages/MainPage';
import LoginOrSing from "../../pages/LoginPage";
import ProductsPage from "../../pages/ProductPage";
import OneProductPage from "../../pages/OneProductPage";
import Owerlay from "../../pages/Owerlay";
import CabinetPage from "../../pages/CabinetPage";
import "./App.css";
import AddHouse from "../../pages/AddHouse";

function App() {
    const [form, setForm] = useState('');
    const [token, setToken] = useState('');


    useEffect(() => {
        setToken(localStorage.getItem("token"))
    }, [])

    return (
      
        <Router>
          
            <div >
                {/* <Header/> */}
                <Routes>
                    <Route path="/" element={<MainPage form={setForm}/>}/>

                    <Route path="/" element={<Owerlay form={setForm}/>}>
                        { !token ?
                            <>
                        <Route path="/login" element={<LoginOrSing form={form}/>}/>
                        <Route path="/singup" element={<LoginOrSing form={form}/>}/>
                            </>
                            : <></>}

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
