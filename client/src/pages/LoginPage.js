import {useEffect} from "react";
import Form from "../components/form/Form";
import {fetchApartments} from "../components/services/http";


const LoginOrSing = ({form}) => {

    return (
        <>
            <Form form={form}/>
        </>
    )
}

export default LoginOrSing;