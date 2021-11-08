const axios = require("axios")
const port= 3001

export const getPrices = async () =>
{
    const response = await axios.get(`http://localhost:${port}/prices`)
    return response.data
}

export const setVoucherCookie = async (voucher) =>
{
    const response = await axios.post(`http://localhost:${port}/updateVoucherCookie`,{
        voucher: voucher
    })
    return response.data
}

export const applyVoucherCookie = async () =>
{
    const response = await axios.post(`http://localhost:${port}/applyVoucherCookie`)
    return response.data
}

export const applyVoucher = async (voucher) =>
{
    const response = await axios.post(`http://localhost:${port}/applyVoucherCookie`,{
        voucher: voucher
    })
    return response.data
}