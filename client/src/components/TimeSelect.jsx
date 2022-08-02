import React from "react";
import {Box, FormControl, Select, MenuItem, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setTimeRange} from "../redux/slices/tickersSlice";
import {selectTimeRange} from "../redux/selectors";
import socketIOClient from "socket.io-client";

const TIME_RANGES = [
    {
        id: 1,
        title: '1s',
        value: 1000,
    },
    {
        id: 2,
        title: '5s',
        value: 5000,
    },
    {
        id: 3,
        title: '10s',
        value: 10000,
    },
    {
        id: 4,
        title: '30s',
        value: 30000,
    },
]

export const TimeSelect = () => {

    const dispatch = useDispatch();
    const timeRange = useSelector(selectTimeRange)

    const ENDPOINT = 'http://localhost:4000/'
    const socket = socketIOClient(ENDPOINT)

    const handleChange = (event) => {
        dispatch(setTimeRange(event.target.value));
        // socket.emit('test', {test: timeRange})
    };

    return (
        <Box sx={{display: 'flex', alignItems: 'center',}}>
            <Typography sx={{marginRight: '20px'}}>Select the time range: </Typography>
            <FormControl>
                <Select
                    id="select"
                    value={timeRange}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {
                        TIME_RANGES.map(range => (
                            <MenuItem
                                key={range.id}
                                value={range.value}
                            >
                                {range.title}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    )
}