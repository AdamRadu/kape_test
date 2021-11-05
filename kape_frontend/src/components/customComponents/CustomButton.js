import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function BasicButtons(props) {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => { navigate(`/#`) }}
            style={{ ...props }}
            variant={props.variant}>
                {props.text}
        </Button>
    );
}