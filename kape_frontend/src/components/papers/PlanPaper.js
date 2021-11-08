import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Button from '../customComponents/CustomButton'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: "#FFFFFF",
        paddingBottom: "30px"
    },
    title: {
        color: "#323232",
        textAlign: "center",
        paddingTop: "30px",
        fontSize: "12px",
        paddingBottom: "15px",
        fontWeight: "bold",
        width: "100%",
        paddingBottom: "15px"
    },
    price: {
        color: "#323232",
        textAlign: "center",
        paddingTop: "10px",
        fontWeight: "bold",
        height: "24px",
        fontSize: "32px",
        paddingBottom: "15px"
    },
    body: {
        color: "#707070",
        textAlign: "bottom",
        paddingTop: "20px",
        width: "100%",
        height: "50%",
        fontSize: "12px",
        paddingBottom: "15px"
    }
}));

export default function PlanPapaer(props) {
    const classes = useStyles();

    const periodPrice = props.title === "1 Month" ? `Billed ${props.price} € every month`
        : props.title === "1 Year" ? `Billed ${(props.price * 12).toFixed(2)} € every year`
            : props.title === "3 Years" ? `Billed ${Math.round(props.price * 36)} € every 3 years`
                : ''

    const moneyBack = props.title === "1 Month" 
                    ? `14-day money-back guarantee` 
                    : `45-day money-back guarantee`

    let buttonStyle

    if (props.title === "3 Years") {
        buttonStyle = {
            backgroundColor: '#65A63A',
            borderColor: '#65A63A',
            color: '#FFFFFF',
            variant: 'filled'
        }
    }
    else {
        buttonStyle = {
            backgroundColor: '',
            borderColor: '#323232',
            color: '#323232',
            variant: 'outlined'
        }
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}
                elevation={3}>
                <Grid container
                    justifyContent="center"
                    alignItems="center">
                    {props.title === "3 Years" ?
                        <Button width="40%"
                            marginTop='30px'
                            text='SAVE 80%'
                            backgroundColor='#EFF6EB'
                            color='#65A63A'
                            variant='filled'
                            padding="10px"
                            fontWeight="bold"
                            borderRadius='5em'
                            disabled={true} />
                        : ""}
                    <Typography
                        className={classes.title}>
                        {props.title}
                    </Typography>

                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center">
                        <Typography
                            className={classes.price}>
                            {props.price}
                        </Typography>

                        <Typography style={{
                            color: "#323232",
                            fontWeight: "bold",
                            textAlign: "center",
                            fontSize: "12px",
                        }}>
                            {'€'}
                        </Typography>

                        <Typography style={{
                            color: "#707070",
                            textAlign: "center",
                            fontSize: "12px",
                            paddingTop: "30px"
                        }}>
                            {'/mo'}
                        </Typography>
                    </Grid>
                    <Typography
                        className={classes.body}>
                        {periodPrice}
                    </Typography>
                    <Button
                        width="50%"
                        text={`Get ${props.title.toLowerCase()} plan`}
                        backgroundColor={buttonStyle.backgroundColor}
                        borderColor={buttonStyle.borderColor}
                        color={buttonStyle.color}
                        variant={buttonStyle.variant}
                        padding="10px"
                        fontWeight="bold" />
                    <Typography
                        className={classes.body}>
                        {moneyBack}
                    </Typography>
                </Grid>
            </Paper>
        </div >
    );
}