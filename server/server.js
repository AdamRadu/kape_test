const express = require('express')
const accepts = require('accepts')
const useragent = require('express-useragent');
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(cookieParser())
app.use(express.json())

setDefaultCookies = (res) => {
    res.cookie('source', 'website');
    res.cookie('campaign', 'test');
    res.cookie('voucher', null);
}

app.use(useragent.express());

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

app.get('/', function (req, res) {
    res.send('cookies created successfully')
})

app.post('/updateVoucherCookie', (req, res) => {
    const voucher = req.body.voucher
    res.cookie('voucher', voucher);
    res.send(`cookie was updated successfully with the value: ${voucher}`);
})

app.listen(port, () => {
    console.log(`App listens on port ${port}`)
})


