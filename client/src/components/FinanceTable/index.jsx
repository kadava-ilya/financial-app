import React, {useState, useEffect} from "react";
import {styled, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {removeTicker} from "../../redux/slices/tickersSlice";

import {ClearButton} from "../ClearButton";
import {SkeletonBox} from "./SkeletonBox";
import {TABLE_HEADER} from "../../utils/constants";
import {TABLE_ICONS} from "../../utils/constants";
import {checkPositiveNumber} from "../../utils/functions/checkPositiveNumber";
import {setBgColor} from "../../utils/functions/setBgColor";

const TextWithActiveBG = styled(Typography)({
    borderRadius: 5,
    textAlign: 'center',
    maxWidth: 80,
})

const TableCol = styled(TableCell)({
    minWidth: 120,
    textAlign: 'center',
    padding: 12,
})

const StyledRow = styled(TableRow)(() => ({
    '&.MuiTableRow-root': {
        '&:hover': {
            backgroundColor: '#f2f6ff'
        },
    },
}));

export const FinanceTable = ({tickersData, inputValue, removedTicker}) => {
    const [filteredTickersData, setFilteredTickersData] = useState([])

    useEffect(() => {
        setFilteredTickersData(
            tickersData
                .filter((el) => el.ticker.toLowerCase().includes(inputValue.toLowerCase()))
                .filter(e => !removedTicker.includes(e.ticker))
        )
    }, [tickersData, inputValue, removedTicker])

    return (
        <>
            <Table sx={{margin: '40px 0'}}>
                <TableHead>
                    <TableRow>
                        {TABLE_HEADER.map((title, index) => (
                            <TableCol key={index}>
                                {title}
                            </TableCol>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickersData.length
                        ? filteredTickersData
                            .map((obj, i) => (
                                <StyledRow key={i}>
                                    <TableCol>
                                        <img style={{width: '20px', height: 'auto'}} src={TABLE_ICONS(obj.ticker)} alt=""/>
                                    </TableCol>
                                    <TableCol>
                                        {obj.ticker}
                                    </TableCol>
                                    <TableCol>
                                        {obj.exchange}
                                    </TableCol>
                                    <TableCol>
                                        {obj.price}
                                    </TableCol>
                                    <TableCol>
                                        <TextWithActiveBG sx={setBgColor(parseFloat(obj.change))}>
                                            {checkPositiveNumber(obj.change)}
                                        </TextWithActiveBG>
                                    </TableCol>
                                    <TableCol>
                                        <TextWithActiveBG sx={setBgColor(parseFloat(obj.change_percent))}>
                                            {checkPositiveNumber(obj.change_percent)}
                                        </TextWithActiveBG>
                                    </TableCol>
                                    <TableCol>
                                        {obj.dividend}
                                    </TableCol>
                                    <TableCol>
                                        {obj.yield}
                                    </TableCol>
                                    <TableCol>
                                        {new Date(obj.last_trade_time).toLocaleString()}
                                    </TableCol>

                                    <TableCol>
                                        <ClearButton onClick={removeTicker(obj.ticker)} />
                                    </TableCol>

                                </StyledRow>
                            ))
                        : ([...new Array(6)].map((_, index) => (
                            <TableRow key={index}>
                                {[...new Array(10)].map((_, index) => <TableCell key={index} sx={{margin: '0 auto'}}>
                                    <SkeletonBox />
                                </TableCell>)}
                            </TableRow>)))
                    }
                </TableBody>
            </Table>
        </>
    )
}
