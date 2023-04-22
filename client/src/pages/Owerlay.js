import { Outlet } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const  Owerlay = ({form}) => {
    return (
    <>
        <Header form={form}/>
        
        <Outlet />
        
        <Footer/>
        
    </>)
}

export default Owerlay;