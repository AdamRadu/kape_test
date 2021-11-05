const axios = require("axios")
const port= 3001

export const getClientLocation = async () =>
{
    const ip ="188.26.61.45"
    const response = await axios.post(`http://localhost:${port}/getClientLocation`,{
        ip: ip
    })
    return response.data
}

export const getClientLocale = async () =>
{
    const response = await axios.post(`http://localhost:${port}/getClientLocale`)
    return response.data
}

export const getClientIP = async () =>
{
    const response = await axios.post(`http://localhost:${port}/getClientIP`)
    return response.data
}