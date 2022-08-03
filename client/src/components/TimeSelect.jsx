import React from "react";
import {Box, FormControl, Select, MenuItem, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setTimeRange} from "../redux/slices/tickersSlice";
import {selectTimeRange} from "../redux/selectors";
import {TIME_RANGES} from "../utils/constants";

export const TimeSelect = () => {

    const dispatch = useDispatch();
    const timeRange = useSelector(selectTimeRange)

    const handleChange = (event) => {
        dispatch(setTimeRange(event.target.value));
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