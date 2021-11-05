import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@mui/icons-material/Info';
import ReactFlagsSelect from 'react-flags-select';
import LocaleCode from 'locale-code'
import {
    getClientLocation,
    getClientLocale,
    getClientIP
}
    from "../client_info/contorller"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    infoBar: {
        backgroundColor: "#E7E7E7",
        height: "33px"
    },
    text: {
        color: '#656679'
    },
    boldText: {
        fontWeight: "bold",
        color: '#656679'
    },
    statusText: {
        fontWeight: "bold",
        color: '#CB311A'
    },
    toolbar: {
        height: "33px",
        maxHeight: "33px",
        minHeight: "33px"
    },
    item: {
        marginRight: "10px"
    },
    info: {
        height: "12px",
        width: "12px",
        maxHeight: "12px",
        maxWidth: "12px",
        color: "#656679",
        marginLeft: "5px"
    },
    countriesSelect: {
        marginTop:"2px"
    },
    container: {
        width: "50%"
    }
}));

export default function CustomInfoBar() {
    const classes = useStyles();

    const [ip, setIP] = useState()
    const [location, setLocation] = useState()
    const [languages, setLanguages] = useState()
    const [countries, setCountries] = useState()
    const [selectedCountry, setSelectedCountry] = useState()
    
    /* This Use Effect function is getting called when the component mounts to avoid an infinite loop
        as it updates the state of the component in order to resolve the promisses and extract the country
        codes for the flag dropdown*/
    useEffect(() => {
        getClientLocation().then(result => {
            setLocation(result)
        })

        getClientLocale().then(result => {
            setLanguages(result)
            let countries = []
            result.map(language => {
                if (LocaleCode.validateCountryCode(language)) {
                    countries.push(LocaleCode.getCountryCode(language))
                }
                return countries
            })
            setSelectedCountry(countries[0])
            setCountries(countries)
        })

        getClientIP().then(result => {
            setIP(result)
        })
    }, [])

    return (
        <div className={classes.root}>

            <AppBar position="static" className={classes.infoBar}>
                <Toolbar className={classes.toolbar}>
                    <Grid container className={classes.container}>
                        <Grid item className={classes.item} >
                            <Typography className={classes.text}
                                variant="caption">
                                {"Your Location: "}
                            </Typography>
                            <Typography className={classes.boldText}
                                variant="caption">
                                {location ? `${location.city}(${location.country})` : ''}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.item} >
                            <Typography className={classes.text}
                                variant="caption">
                                {"Your IP: "}
                            </Typography>
                            <Typography className={classes.boldText}
                                variant="caption">
                                {ip}
                            </Typography>
                        </Grid>
                        <Grid item className={classes.item} >
                            <Typography className={classes.text}
                                variant="caption">
                                {"Your Status: "}
                            </Typography>
                            <Typography className={classes.statusText}
                                variant="caption">
                                {"EXPOSED"}
                            </Typography>
                            <InfoIcon className={classes.info} />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.container}
                        justifyContent="flex-end">
                        <ReactFlagsSelect className={classes.countriesSelect}
                            onSelect={code => setSelectedCountry(code)}
                            countries={countries}
                            selected={selectedCountry}
                            showSelectedLabel={false}
                            showSecondarySelectedLabel={false}
                            showOptionLabel={false}
                            showSecondaryOptionLabel={false}
                            selectedSize={14}
                            optionsSize={14} />
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}