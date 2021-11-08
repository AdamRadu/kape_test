import * as api from "./api"

export const getPrices = async () => {
    const result = await api.getPrices()

    // Reads data from the server and creates a new array of objects that should provide an easir acces to the data
    const prices = []
    for (let title in result) {
        prices.push({
            title: title,
            monthly: result[title].monthly,
            yearly: result[title].yearly
        })
    }

    return prices
}

export const setVoucherCookie = async (voucher) => {
    const result = await api.setVoucherCookie(voucher)
    return result
}

export const applyVoucherCookie = async () => {
    const result = await api.applyVoucherCookie()
    return result
}

export const applyVoucher = async (voucher) => {
    const result = await api.applyVoucher(voucher)
    return result
}