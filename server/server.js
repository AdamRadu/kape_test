const express = require('express')
const accepts = require('accepts')
const useragent = require('express-useragent')
const cookieParser = require('cookie-parser')
const requestIp = require('request-ip')
const app = express()
const geoip = require('geoip-lite');
const port = 3000

app.use(cookieParser())
app.use(express.json())
app.use(requestIp.mw())
app.use(useragent.express());

setDefaultCookies = (res) => {
    res.cookie('source', 'website');
    res.cookie('campaign', 'test');
    res.cookie('voucher', null);
}

getBrowserVersionAndName = (req) => {
    const ua = req.useragent
    const browser = {
        name: ua.browser,
        version: ua.version
    }
    return browser
}

isMobile = (req) => {
    const ua = req.useragent
    const browser = {
        isMobile: ua.isMobile,
        platform: ua.platform
    }
    return browser
}

getAllBrowserLanguages = (req) => {
    return accepts(req).languages()
}

app.get('/setDefaultCoockies', function (req, res) {
    setDefaultCookies(res)
    res.send('cookies created successfully')
})

app.get('/getBrowserLanguages', function (req, res) {
    const lang = getAllBrowserLanguages(req)
    res.send(`browser accepted languages are: ${lang} `)
})

app.get('/getBrowserNameVersion', function (req, res) {
    const browser = getBrowserVersionAndName(req)
    res.send(`browser name is: ${browser.name} and version is: ${browser.version} `)
})

app.get('/getBrowserPlatform', function (req, res) {
    const browser = isMobile(req)
    if (browser.isMobile) {
        res.send(`The device platform is: ${browser.platform} and it is a mobile platform`)
    } else {
        res.send(`The device platform is: ${browser.platform} and it is a mobile platform`)
    }
})

getLocation = (ip) => {
    // TODO: replace the ip variable on the line below with public ip value
    const geo = geoip.lookup(ip);
    const location = {
        country: geo.country,
        city: geo.city,
        latitude: geo.ll[0],
        longitude: geo.ll[1]
    }

    return location
}


app.get('/getClientLocation', function (req, res) {
    const ip = req.clientIp.split(":").pop()
    const location= getLocation(ip)
    
    res.send(`The client ip and location are ip: ${ip}, country: ${location.country}, city: ${location.city}`)
})

app.get('/', function (req, res) {

    res.send('app listens on port 3000')
})

app.post('/updateVoucherCookie', (req, res) => {
    const voucher = req.body.voucher
    res.cookie('voucher', voucher);
    res.send(`cookie was updated successfully with the value: ${voucher}`);
})

app.listen(port, () => {
    console.log(`App listens on port ${port}`)
})


