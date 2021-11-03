// external libraries
const accepts = require('accepts')
const cookieParser = require('cookie-parser')
const express = require('express')
const useragent = require('express-useragent')
const geoip = require('geoip-lite');
const requestIp = require('request-ip')

const app = express()
const port = 3000

// local json files
const prices = require('./config_files/prices.json')
const vouchers = require('./config_files/vouchers.json')

app.use(cookieParser())
app.use(express.json())
app.use(requestIp.mw())
app.use(useragent.express());


// Helper functions

// Helper function to set default values for the three cookies, source, campaign and voucher
setDefaultCookies = (res) => {
    res.cookie('source', 'website');
    res.cookie('campaign', 'test');
    res.cookie('voucher', null);
}

// Helper function that returns the name and the version of the browser that made the request
getBrowserVersionAndName = (req) => {
    const ua = req.useragent
    const browser = {
        name: ua.browser,
        version: ua.version
    }
    return browser
}

/* Helper function that returns an onject with two attributes, the first one is true if the request is sent from a mobile device, 
   and the second one is the platform from which the request has been sent for example, if the request is sent from an iPhone, 
   thereturn object would be { isMobile: true, platform: iPhone }*/
isMobile = (req) => {
    const ua = req.useragent
    const browser = {
        isMobile: ua.isMobile,
        platform: ua.platform
    }
    return browser
}

// Helper function that returns the browser locale
getAllBrowserLanguages = (req) => {
    return accepts(req).languages()
}

// Helper function that prints in the command line the list of prices from prices.json file in a tbale like format
prettyPrintPrices = () => {
    console.log("-----------------------------------------")
    console.log("|  Title   |    M Price   |   Y Price   |")
    console.log("-----------------------------------------")
    for (key in prices) {
        let string = `|   ${key}   |`
        for (attr in prices[key]) {
            string += `    ${prices[key][attr]}   |`
        }
        console.log(string)
        console.log("-----------------------------------------")
    }
}

/* Helper function that takes as parameter a voucher and prints in the command line the list of prices from prices.json 
   and additionally inserts the prices after the discount was applied to them file in a tbale like format*/
prettyPrintVoucherPrices = (voucher) => {
    console.log("-------------------------------------------------------------------------------------")
    console.log("|  Title   |    Price M   | Discounted M |   Price Y   | Discounted Y |   Voucher   |")
    console.log("-------------------------------------------------------------------------------------")
    for (key in prices) {
        let string = `|   ${key}   |`
        for (attr in prices[key]) {
            let constdiscPrice = prices[key][attr] - prices[key][attr] * vouchers[voucher]
            string += `    ${prices[key][attr]}   |   ${constdiscPrice}   |`
        }

        string += `   ${voucher}   |`

        console.log(string)
        console.log("-------------------------------------------------------------------------------------")
    }
}

// Helper function that takes as an attribute a given ip address and returns the geolocation of that ip address
getLocation = (ip) => {
    const geo = geoip.lookup(ip);
    const location = {
        country: geo.country,
        city: geo.city,
        latitude: geo.ll[0],
        longitude: geo.ll[1]
    }

    return location
}

// Available requests

// A request that sets the coockies to their default values 
app.get('/setDefaultCoockies', function (req, res) {
    setDefaultCookies(res)
    res.send('Default cookies were created successfully')
})

// Arequest that retrieves the browser locale 
app.get('/getBrowserLanguages', function (req, res) {
    const lang = getAllBrowserLanguages(req)
    res.send(`Browser accepted languages are: ${lang} `)
})

// A request that retrieves the browser name and version
app.get('/getBrowserNameVersion', function (req, res) {
    const browser = getBrowserVersionAndName(req)
    res.send(`Browser name is: ${browser.name} and version is: ${browser.version} `)
})

// A request that retrieves the platform from which the request was sent and wether or not the platform is a mobile platform 
app.get('/getBrowserPlatform', function (req, res) {
    const browser = isMobile(req)
    if (browser.isMobile) {
        res.send(`The device platform is: ${browser.platform} and it is a mobile platform`)
    } else {
        res.send(`The device platform is: ${browser.platform} and it is a mobile platform`)
    }
})

// A request that uses the client ip to determine the location of the client
app.get('/getClientLocation', function (req, res) {
    const ip = req.clientIp.split(":").pop()
    // TODO: replace the ip variable on the line below with the public ip value as a string 
    const location = getLocation(ip)

    res.send(`The client ip and location are ip: ${ip}, country: ${location.country}, city: ${location.city}`)
})

// A request that reads the prices.json file and displays its contents in the command line
app.get('/prices', function (req, res) {
    prettyPrintPrices()
    res.send(`Succsesfully read local prices, please check command line`)
})

// Home
app.get('/', function (req, res) {
    res.send(`App listens on port ${port}`)
})

// A request that updates the voucher cookie only if the voucher is valid, the discount code is one of the discount codes from vouchers.json file 
app.get('/updateVoucherCookie', (req, res) => {
    const voucher = req.query.voucher
    if (vouchers[voucher]) {
        res.cookie('voucher', voucher, { overwrite: true });
        res.send(`Voucher cookie was updated successfully with the value: ${voucher}`);
    } else {
        res.send(`Your voucher is not valid!`);
    }
})

// A request that applies the discount value to all the prices from prices.json and prints them in the command line 
app.get('/applyVoucherCookie', (req, res) => {
    const voucher = req.query.voucher
    if (vouchers[voucher]) {
        prettyPrintVoucherPrices(voucher)
        res.send(`Succsesfully updated prices post discount, please check command line`);
    } else {
        res.send(`Your voucher is not valid!`);
    }
})

app.listen(port, () => {
    console.log(`App listens on port ${port}`)
})


