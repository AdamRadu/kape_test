import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import flag from '../../assets/Flag.png'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '../customComponents/CustomButton'
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundImage: `url(${flag})`,
        height: "500px",
    },
    linkGrid: {
        height: "15px",
        paddingLeft: "20px",
        paddingTop: "5px"
    },
    homeIcon: {
        color: "#FFFFFF",
        height: "15px",
        width: "15px",
        maxHeight: "15px",
        maxWidth: "15px",
    },
    linkText: {
        color: "#FFFFFF",
        height: "15px",
        maxHeight: "15px",
        fontSize: "13px"
    },
    grid: {
        height: "100%"
    },
    text: {
        color: "#FFFFFF",
        width: "50%",
        textAlign: "left"
    }
}));

export default function FlagPaper() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}
                elevation={0}
                variant="outlined" square>
                <Grid
                    className={classes.linkGrid}
                    container
                    direction="row">
                    <Grid item>
                        <HomeIcon className={classes.homeIcon} />
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.linkText}
                            onClick={() => { navigate(`/#`) }}>
                            {' / VPN Insights / Features'}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container
                    alignItems="center"
                    justifyContent="center"
                    style={{ width: "100%", height: "100%" }}>
                    <Grid className={classes.grid} container
                        alignItems="center"
                        justifyContent="center" >
                        <Grid container style={{ width: "60%", height:"40%"}}
                            justifyContent="flex-start">
                            <Grid item style={{ width: "100%" }}>
                                <Typography
                                    className={classes.text}
                                    style={{ fontSize: "40px", fontWeight: "bold" }}>
                                    {'Get the best VPN for Austria'}
                                </Typography>
                            </Grid>
                            <Grid item style={{ width: "100%" }}>
                                <Typography
                                    className={classes.text}
                                    style={{ fontSize: "20px" }}>
                                    {'Download anonymously and keep your online identity hidden with CyberGhost VPN'}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container
                            direction="column"
                            style={{ width: "60%", height: "40%" }}
                            justifyContent="center">
                            <Grid container style={{ width: "50%" }} justifyContent="flex-start">
                                <Button
                                    width="50%"
                                    text={"GET CyberGhost VPN"}
                                    backgroundColor="#FFCC00"
                                    borderColor="#FFCC00"
                                    color="#1D1E2F"
                                    variant="filled"
                                    padding="10px"
                                    fontWeight="bold" />
                            </Grid>
                            <Grid container style={{ width: "50%" }} justifyContent="flex-start">
                                <Typography
                                    className={classes.text}
                                    onClick={() => { navigate(`/#`) }}
                                    style={{ 
                                        color: "#FFFFFF",
                                        width: "50%",
                                        paddingTop:"10px",
                                        textAlign: "center",
                                        textDecoration: 'underline'}}>
                                    {'Or try our free trial'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}