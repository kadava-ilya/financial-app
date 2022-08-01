import React from "react";
import {IconButton} from "@mui/material";
import ClearInputIcon from "../assets/icons/ClearInputIcon";
import {useDispatch} from "react-redux";

export const ClearButton = ({onClick}) => {

    const dispatch = useDispatch();

    return (
        <IconButton
            sx={{padding: 0}}
            onClick={() => dispatch(onClick)}
        >
            <ClearInputIcon />
        </IconButton>
    )
}