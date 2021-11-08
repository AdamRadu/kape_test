import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/LOGO.png';
import Grid from '@material-ui/core/Grid';
import Menu from './customComponents/CustomMenu'
import TextButton from './customComponents/CustomTextButton'
import Button from './customComponents/CustomButton'

const useStyles = makeStyles((theme) => ({
    bar: {
        backgroundColor: "#1D1E2F",
        height: "72px"
    },
    toolbar: {
        height: "100%"
    },
    grid: {
        width: "50%"
    }
}));

export default function CustomAppBar() {
    const classes = useStyles();


    return (
        <div className={classes.root}>

            <AppBar position="static" className={classes.bar}>
                <Toolbar className={classes.toolbar}>
                    <Grid container className={classes.grid}
                    justifyContent= "space-between">
                        <Grid item>
                            <img src={logo} alt="" />
                        </Grid>
                        <Grid item>
                            <Menu
                            options= {["FAQ", "About our VPN", "Why CyberGhost VPN"]}
                            text = {"What is VPN"}/>
                        </Grid>
                        <Grid item>
                            <Menu
                            options= {["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6", "Feature 7"]}
                            text = {"Features"}/>
                        </Grid>
                        <Grid item>
                            <Menu
                            options= {["Zen VPN", "CyberGhost VPN", "Express VPN-"]}
                            text = {"VPN Apps"}/>
                        </Grid>
                        <Grid item>
                            <TextButton
                            text = {"Pricing"}/>
                        </Grid>
                        <Grid item>
                            <TextButton
                            text = {"Servers"}/>
                        </Grid>
                        <Grid item>
                            <TextButton
                            text = {"Privacy Hub"}/>
                        </Grid>
                        <Grid item>
                            <TextButton
                            text = {"Help"}/>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.grid}
                        justifyContent="flex-end">
                       <Grid item>
                            <Button
                            text = {"Buy Now -79% Discount"}
                            backgroundColor="#FFCC00"
                            borderColor="#FFCC00"
                            color="#1D1E2F"
                            variant="filled"
                            margin="4px"
                            fontWeight="bold"/>
                        </Grid>
                        <Grid item>
                            <Button
                            text = {"My Account"}
                            borderColor="#FFFFFF"
                            color="#FFFFFF"
                            variant="outlined"
                            margin="4px"
                            fontWeight="bold"/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}