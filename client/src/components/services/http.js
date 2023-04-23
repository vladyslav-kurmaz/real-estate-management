import axios from "./axios";

export const registration = async (data) => {
    // work

    try {
        await axios.post('/registration', data);
    } catch (e) {
        return e
    }
}

export const login = async (data) => {
    // work
    try {
        const info = await axios.post('/login', data)
        await localStorage.setItem("token", info.data.token);
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

export const createApartment = async (data) => {
    //обов'язково бути авторизованим
    //створити квартиру

    /*
        name { min: 6, max: 30 } string
     description { min: 20, max: 150  } string
    address string,
    rooms number,
    squareArea number
    price number
    photos (not required but if exist) - [string, string]
    status одне з цього for-sale appear sold surrendered
    */
    try {
        await axios.post('/apartment', data);
    } catch (e) {
        return e
    }
}

export const updateApartment = async (id, data) => {
    //обов'язково бути авторизованим
    //обновити статус квартири
/*
    status одне з цього for-sale appear sold surrendered archived
    */

    try {
        await axios.patch('/apartment/' + id, data);
    } catch (e) {
        return e
    }
}

export const getOneApartment = async (id) => {
    // id  - квартири
    //отримати квартиру по айді
    try {
        const {data} =await axios.get('/apartment/' + id);
        return data
    } catch (e) {
        return e
    }
}

export const toRent = async (id) => {
    //обов'язково бути авторизованим
    // id  - квартири
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
    //обов'язково бути авторизованим
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
    //обов'язково бути авторизованим
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
    //обов'язково бути авторизованим
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
    //обов'язково бути авторизованим
    //для отримання квартир, що орендують
    // id - user
    try {
        const {data} = await axios.get('/apartments/rent')
        return data
    } catch (e) {
        return e
    }
}