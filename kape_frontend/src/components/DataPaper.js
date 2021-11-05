import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Freedom from '../assets/Freedom.png'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#F8F9FA",
        paddingBottom: "30px"
    },
    subtitle: {
        color: "#323232",
        textAlign: "center",
        paddingTop: "100px",
        fontWeight: "bold",
        width: "100%",
        fontSize: "32px",
        paddingBottom: "15px"
    },
    body: {
        color: "#323232",
        textAlign: "center",
        paddingTop: "20px",
        width: "100%",
        fontSize: "16px",
        paddingBottom: "15px"
    },
    underline: {
        color: "#2876A7",
        textAlign: "center",
        paddingTop: "20px",
        width: "100%",
        fontSize: "16px",
        paddingBottom: "15px",
        textDecoration: 'underline'
    }
}));

export default function DataPapaer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}
                elevation={0} square>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item style={{ width: "50%" }}>
                        <Typography
                            className={classes.subtitle}>
                            {'Your data is highly sought after'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            className={classes.body}>
                            {'The internet was meant to be free and open to anyone. But sadly, that’s not the case, with '}
                            <span
                            className={classes.underline}>
                                {'internet surveillance'}
                            </span>
                            {' becoming the norm. Everything you do online is collected and stored. And Austria is no exception to this.'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            className={classes.body}>
                            {'The European Data Retention Directive has been a privacy nightmare for all European citizens. This threat has lurked over Austrian citizens for over a decade.'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            className={classes.body}>
                            {'And while Austrian authorities '}
                            <span
                            className={classes.underline}>
                                {'have been playing cat and mouse with its implementation'}
                            </span>
                            {', there is no guarantee of what the future holds.'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={Freedom} alt="" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            className={classes.body}>
                            {'However, let’s not forget that your data is being harvested with every site and '}
                            <span
                            className={classes.underline}>
                                {'social media page'}
                            </span>
                            {' you frequent. Targeted ads have been a game changer for online platforms, which caused data to be collected by the bulk.'}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            className={classes.body}>
                            {'Not to mention '}
                            <span
                            className={classes.underline}>
                                {'data breaches'}
                            </span>
                            {' are becoming a worryingly common occurrence. '}
                            <span
                            className={classes.underline}>
                                {'Austrian businesses have also been targeted'}
                            </span>
                            {', as they usually don’t rely on cybersecurity as much as they should.'}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}