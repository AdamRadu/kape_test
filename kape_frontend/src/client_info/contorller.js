import * as api from "./api"

export const getClientLocation = async () =>{
    const result = await api.getClientLocation()
    return result
}

export const getClientLocale = async () =>{
    const result = await api.getClientLocale()
    return result
}

export const getClientIP = async () =>{
    const result = await api.getClientIP()
    return result
}