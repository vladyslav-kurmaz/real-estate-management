import axios from "./axios";


const fetchApartments = async () => {
    try {
        const {data} = await axios.get('/apartments');
        return data
    } catch (e) {
        return e
    }
}


export {
    fetchApartments
}