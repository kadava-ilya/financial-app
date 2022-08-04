import React from "react";
import {Box, InputAdornment, TextField} from "@mui/material";
import {setInputValue, setInputClear} from "../redux/slices/searchSlice";
import {useDispatch, useSelector} from "react-redux";
import {ClearButton} from "./ClearButton";
import {selectInputValue} from "../redux/selectors";

export const SearchInput = () => {

    const dispatch = useDispatch();
    const inputValue = useSelector(selectInputValue);

    return (
        <Box component="form">
            <TextField
                id=''
                sx={{minWidth: 300}}
                value={inputValue}
                placeholder='Search'
                onChange={(e) => dispatch(setInputValue(e.target.value))}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {inputValue && (
                                <ClearButton onClick={setInputClear()}/>
                            )}
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}