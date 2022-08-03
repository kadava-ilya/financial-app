import React from "react";
import {Box, Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {showTicker} from "../redux/slices/tickersSlice";
import {selectRemovedTicker} from "../redux/selectors";

export const RemovedTickers = () => {

    const dispatch = useDispatch();
    const removedTicker = useSelector(selectRemovedTicker);


    return (
        <>
            {
                removedTicker.length
                    ? (
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <Typography sx={{marginRight: 2}}>
                                Removed tickers:
                            </Typography>
                            {removedTicker.map((ticker, index) => (
                                <Button
                                    key={index}
                                    variant="outlined"
                                    onClick={() => dispatch(showTicker(ticker))}
                                    sx={{marginRight: 1}}
                                >
                                    {ticker}
                                </Button>
                            ))}
                        </Box>
                    )
                    : null
            }
        </>
    )
}