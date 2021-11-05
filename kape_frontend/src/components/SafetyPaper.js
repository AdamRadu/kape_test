import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Safety from '../assets/Safety.png'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#FFFFFF",
        paddingBottom: "30px"
    },
    subtitle: {
        color: "#323232",
        textAlign: "left",
        paddingTop: "100px",
        fontWeight: "bold",
        width: "100%",
        height: "24px",
        fontSize: "20px",
        paddingBottom: "15px"
    },
    body: {
        color: "#323232",
        textAlign: "left",
        paddingTop: "20px",
        width: "100%",
        fontSize: "16px",
        paddingBottom: "15px"
    },
    largeGrid: {
        width: "100%",
        paddingTop: "30px",
        paddingBottom: "30px"
    },
    underline: {
        color: "#2876A7",
        textAlign: "left",
        paddingTop: "20px",
        width: "100%",
        fontSize: "16px",
        paddingBottom: "15px",
        textDecoration: 'underline'
    },
    grid: {
        height: "100%"
    },
    line:{
        color: '#FFCC00',
        backgroundColor: '#FFCC00',
        height: 3,
        width: '80px',
        borderColor: '#FFCC00'
    }
}));

export default function DataPapaer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}
                elevation={0} square>
                <Grid container
                    justifyContent="center"
                    alignItems="center">
                    <Grid container xs={8}
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Grid item xs={4} className={classes.grid}>
                            <img src={Safety} alt="" />
                        </Grid>
                        <Grid container xs={8} direction="column" className={classes.grid}>
                            <Grid container justifyContent='flex-start' >
                                <Typography
                                    className={classes.subtitle}>
                                    {'Stay safe on public Wi-Fis networks'}
                                </Typography>
                                <Grid item>
                                    <hr className={classes.line}/>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'Wireless connections are so common nowadays that we don’t even stop to think the dangers they might pose. Here’s the catch. The networks you use in cafés, airports, or hotels usually lack a secure setup or even a password.'}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'This means that every time you go online using an unsecured Wi-Fi network,'}
                                    <span
                                        className={classes.underline}>
                                        {'you risk exposing your data.'}
                                    </span>
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'You should know that cybercrime has become a very lucrative business, so hackers have every reason to keep perfecting their methods. This is worrying when you consider that there is already a multitude of malicious associations and attacks that target open Wi-Fi networks.'}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'Therefore it’s important to secure your online presence no matter where you are. Our military-grade encryption offers the best protection available and even today’s supercomputers can’t get past it.'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}