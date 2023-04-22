import axios from "./axios";

export const registration = async (data) => {
    // для реєстрації
    try {
        await axios.post('/registration', data);
    } catch (e) {
        return e
    }
}

export const login = async (data) => {
    // для входу
    try {
        const {token} = await axios.post('/login', data);
        localStorage.setItem("token",token)
    } catch (e) {
        return e
    }
}

export const logout = async () => {
    // викликати на кнопці вийти
    try {
        localStorage.removeItem("token")
    } catch (e) {
        return e
    }
}

export const getApartments = async () => {
    //взяти всі квартири
    try {
        const {data} = await axios.get('/apartments');
        return data
    } catch (e) {
        return e
    }
}

export const createApartment = async (id, data) => {
    //створити квартиру
    try {
        await axios.post('/apartment/' + id, data);
    } catch (e) {
        return e
    }
}

export const updateApartment = async (id, data) => {
    //обновити статус квартири
    try {
        await axios.patch('/apartment/' + id, data);
    } catch (e) {
        return e
    }
}

export const getOneApartment = async (id) => {
    //отримати квартиру по айді
    try {
        const {data} =await axios.get('/apartment/' + id);
        return data
    } catch (e) {
        return e
    }
}

export const toRent = async (id) => {
    //для кнопки орендувати
    try {
        await axios.get('/apartment/rent/' + id)
    } catch (e) {
        return e
    }
}

export const getApartmentsByStatus = async (status) => {
    //отримати квартири по статусу
    try {
        const {data} = await axios.get('/apartments/status/' + status)
        return data
    } catch (e) {
        return e
    }
}

export const getApartmentsByName = async (name) => {
    //отримати квартири по пошуку
    try {
        const {data} = await axios.get('/apartments/name/' + name)
        return data
    } catch (e) {
        return e
    }
}

export const сreateOperation = async (id) => {
    //повісити на кнопку оплатити за оренду
    // id - квартири
    try {
        const {data} = await axios.post('/operations/' + id)
        return data
    } catch (e) {
        return e
    }
}

export const getOperations = async (id) => {
    //для отримання операції квартири
    // id - квартири
    try {
        const {data} = await axios.get('/operations/' + id)
        return data
    } catch (e) {
        return e
    }
}

export const getOwnApartmens = async () => {
    //для отримання власних квартир
    // id - user
    try {
        const {data} = await axios.get('/apartments/own')
        return data
    } catch (e) {
        return e
    }
}

export const getRentApartmens = async () => {
    //для отримання квартир, що орендують
    // id - user
    try {
        const {data} = await axios.get('/apartments/rent')
        return data
    } catch (e) {
        return e
    }
}