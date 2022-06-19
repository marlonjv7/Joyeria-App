import axios from "axios"

export const GetData = async (url) => {
    const { data } = await axios.get(`https://reto-1.herokuapp.com/${url}`)
    return data
};
