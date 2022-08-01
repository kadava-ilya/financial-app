import React from "react";
import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import {selectInputValue, setInputValue} from "../redux/slices/searchSlice";
import ClearInputIcon from "../assets/icons/ClearInputIcon";
import {useDispatch, useSelector} from "react-redux";
import {ClearButton} from "./ClearButton";

export const SearchInput = () => {

    const dispatch = useDispatch();
    const inputValueRedux = useSelector(selectInputValue);

    return (
        <Box component="form">
            <TextField
                id=''
                sx={{minWidth: 300}}
                value={inputValueRedux}
                placeholder='Search'
                onChange={(e) => dispatch(setInputValue(e.target.value))}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {inputValueRedux && (
                                <ClearButton onClick={setInputValue('')}/>
                            )}
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}