import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import PlanPaper from './PlanPaper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import {
    getPrices
}
    from "../../prices/controller"

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#FFFFFF",
        paddingTop: "30px",
        paddingBottom: "30px"
    },
    subtitle: {
        color: "#323232",
        textAlign: "center",
        paddingTop: "100px",
        fontWeight: "bold",
        width: "100%",
        height: "24px",
        fontSize: "32px",
        paddingBottom: "15px"
    },
    grid: {
        paddingTop: "20px"
    },
    pricePaper: {
        paddingLeft: "30px",
        paddingRight: "30px",
        paddingTop: "30px"
    },
    warningPaper: {
        backgroundColor: "#FDEDEC",
        borderColor: "#EC4F48",
        marginTop: "10px",
        marginBot: "10px",
    },
    warningText: {
        color: "#EC4F48",
        textAlign: "center",
        fontSize: "12px",
        marginTop: "10px",
        marginBottom: "10px"
    },
    disclaimerText: {
        color: "#707070",
        textAlign: "center",
        fontSize: "12px",
        marginTop: "10px",
        marginBottom: "50px"
    },
    infoIcon: {
        height: "15px",
        width: "15px",
        maxHeight: "15px",
        maxWidth: "15px",
        marginRight: "5px"
    },
    bold: {
        fontWeight: "bold",
    }
}));

export default function PricesPapaer() {
    const classes = useStyles();

    const [prices, setPrices] = useState()

    useEffect(() => {
        getPrices().then(result => {
            setPrices(result)
        })

    }, [])

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}
                elevation={0} square>
                <Grid container
                    justifyContent="center"
                    alignItems="center">
                    <Grid container
                        justifyContent="center">
                        <Typography
                            className={classes.subtitle}>
                            {'Choose a plan that works for you'}
                        </Typography>
                    </Grid>
                    <Grid container
                        className={classes.grid}
                        direction="row"
                        justifyContent="center">
                        {prices ? prices.map(price => {
                            return < Grid container xs={3}
                                direction="column"
                                justifyContent="center"
                                className={classes.pricePaper}>
                                <PlanPaper title={price.title}
                                    price={price.monthly}
                                />
                                {price.title === "1 Month" ?
                                    <Paper variant="outlined"
                                        className={classes.warningPaper}>
                                        <Typography
                                            className={classes.warningText}>
                                            <InfoOutlinedIcon className={classes.infoIcon} variant="outlined" />
                                            {'IPORTANT!'}
                                        </Typography>
                                        <Typography
                                            className={classes.warningText}>
                                            {'The '}
                                            <span className={classes.bold}>
                                                {'3 Years'}
                                            </span>
                                            {' plan includes '}
                                            <span className={classes.bold}>
                                                {'the biggest savings'}
                                            </span>
                                            {' and '}
                                            <span className={classes.bold}>
                                                {'is fully refundable for 45 days'}
                                            </span>
                                        </Typography>
                                    </Paper> : ""}
                                {price.title === "3 Years" ?
                                    <div>
                                        <Typography
                                            className={classes.disclaimerText}>
                                            {'*All amounts shown are in Euros'}
                                        </Typography>
                                    </div> : ""}

                                {price.title === "1 Year" ?
                                    <div style={{ marginBottom: "90px" }}>
                                    </div> : ""}
                            </Grid >
                        }) : ""}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}