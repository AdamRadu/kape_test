import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Download from '../../assets/Download.png'
import Location from '../../assets/Location.png'
import ThumbsUp from '../../assets/ThumbsUp.png'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#FFFFFF",
    },
    subtitle: {
        color: "#323232",
        textAlign: "center",
        paddingTop: "100px",
        fontWeight: "bold",
        width: "100%",
        fontSize: "32px"
    },
    body: {
        color: "#323232",
        textAlign: "center",
        paddingTop: "20px",
        width: "100%",
        fontSize: "16px"
    },
    largeGrid: {
        width: "100%",
        paddingTop: "30px",
        paddingBottom:"30px"
    },
    text: {
        color: "#323232",
        textAlign: "center",
        fontWeight: "bold",
        width: "60%",
        fontSize: "20px",
        '&:hover': {
            color: "#2876A7",
            textDecoration: 'underline'
         },
    }
}));

export default function ProtectDataPaper() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}
                elevation={0} square>
                <Typography
                    className={classes.subtitle}>
                    {'How to protect your data with the best VPN for Austria'}
                </Typography>
                <Typography
                    className={classes.body}>
                    {'3 quick steps and you’re ready to go'}
                </Typography>
                <Grid container
                    className={classes.largeGrid}
                    direction="row"
                    justifyContent="space-between">
                    <Grid container xs={3} justifyContent="center" direction="column">
                        <Grid item>
                            <img src={Download} alt="" />
                        </Grid>
                        <Grid container
                            justifyContent="space-around">
                            <Typography
                                className={classes.text}>
                                {'1. Sign up to become a Ghostie'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={3} justifyContent="center" direction="column">
                        <Grid item>
                            <img src={Location} alt="" />
                        </Grid>
                        <Grid container
                            justifyContent="space-around">
                            <Typography
                                className={classes.text}>
                                {'2. Download & install CyberGhost VPN'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={3}
                        direction="column"
                        justifyContent="center">
                        <Grid item
                            justifyContent="center">
                            <img src={ThumbsUp} alt="" />
                        </Grid>
                        <Grid container
                            justifyContent="space-around">
                            <Typography
                                className={classes.text}>
                                {'3. Enjoy the best VPN in Austria'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}