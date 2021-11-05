import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import World from '../assets/World.png'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#F8F9FA",
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
                        <Grid container xs={8} direction="column" className={classes.grid}>
                            <Grid container justifyContent='flex-start' >
                                <Typography
                                    className={classes.subtitle}>
                                    {'Smash all geo-restrictions'}
                                </Typography>
                                <Grid item>
                                    <hr className={classes.line}/>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'By now, we’re mostly familiar with geo-restrictions and how frustrating they can be. Due to licensing issues many foreign TV shows and movies are restricted in Austria.'}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'Most streaming services detect your location based on your IP address. Then they decide what content is available for you to watch.'}

                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'One popular example of this is '}
                                    <span
                                        className={classes.underline}>
                                        {'Netflix'}
                                    </span>
                                    {'. Even if you have a subscription, you still can’t get the entire library of content in Austria.'}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'The same holds true for '}
                                    <span
                                    className={classes.underline}>
                                    {'Amazon Prime'}
                                </span>
                                    {' or '}
                                <span
                                    className={classes.underline}>
                                    {'YouTube Premium'}
                                </span>
                                {'. Other services, '}
                                <span
                                    className={classes.underline}>
                                    {'Hulu'}
                                </span>
                                    {' or '}
                                <span
                                    className={classes.underline}>
                                    {'BBC'}
                                </span>
                                {' aren’t available to view within Austrian borders at all.'}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'However, with our VPN service by your side, that’s no longer the case. CyberGhost VPN allows you to hide your IP address and replace it with another one from our network. This way, their localization software will no longer be able to detect your real location.'}
                                </Typography>
                            </Grid>
                            <Grid item >
                                <Typography
                                    className={classes.body}>
                                    {'And if you’re travelling abroad and feel homesick, CyberGhost VPN makes it easy to catch up with all from favorite shows on ORF.'}
                                </Typography>
                            </Grid>
                            
                        </Grid>
                        <Grid item xs={4} className={classes.grid}>
                            <img src={World} alt="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}