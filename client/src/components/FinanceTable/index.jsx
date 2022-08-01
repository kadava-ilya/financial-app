import React from "react";
import {styled, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectTickers, removeTicker, selectRemovedTicker} from "../../redux/slices/tickersSlice";
import {selectInputValue} from "../../redux/slices/searchSlice";

import {ClearButton} from "../ClearButton";
import {SkeletonBox} from "./SkeletonBox";

const TABLE_HEADER = ['Ticker', 'Exchange', 'Price, USD', 'Changed, USD', 'Changed, %', 'Dividend', 'Yield', 'Last Trade', '']

const bgColorFunc = (test) => {
    if (test.includes('-')) {
        return {backgroundColor: '#fa6e8a', color: '#b30435'}
    }

    else if (test === '0.00') {
        return {backgroundColor: '#edebeb'}
    }

    else {
        return {backgroundColor: '#aff792', color: '#227a1d'}
    }
}

const TestComponent = styled(Typography)({
    borderRadius: 5,
    textAlign: 'center',
    maxWidth: 80,
})

export const FinanceTable = () => {

    const tickersData = useSelector(selectTickers);
    const inputValueRedux = useSelector(selectInputValue);
    const removedTicker = useSelector(selectRemovedTicker);

    console.log(removedTicker)

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {TABLE_HEADER.map((title, index) => (
                        <TableCell key={index}>
                            {title}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tickersData.length
                    ? tickersData
                        .filter((el) => el.ticker.toLowerCase().includes(inputValueRedux.toLowerCase()))
                        .filter((e) => removedTicker.map(tick => tick !== e.ticker)) //TODO: fix it
                        .map((obj, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    {obj.ticker}
                                </TableCell>
                                <TableCell>
                                    {obj.exchange}
                                </TableCell>
                                <TableCell>
                                    {obj.price}
                                </TableCell>
                                <TableCell>
                                    <TestComponent sx={bgColorFunc(obj.change)}>
                                        {obj.change}
                                    </TestComponent>
                                </TableCell>
                                <TableCell>
                                    <TestComponent sx={bgColorFunc(obj.change_percent)}>
                                        {obj.change_percent}
                                    </TestComponent>
                                </TableCell>
                                <TableCell>
                                    {obj.dividend}
                                </TableCell>
                                <TableCell>
                                    {obj.yield}
                                </TableCell>
                                <TableCell>
                                    {new Date(obj.last_trade_time).toLocaleString()}
                                </TableCell>

                                <ClearButton onClick={removeTicker(obj.ticker)} />
                            </TableRow>
                        ))
                    : ([...new Array(6)].map((_, index) => (
                        <TableRow key={index}>
                            {[...new Array(8)].map((_, index) => <TableCell key={index}>
                                <SkeletonBox />
                            </TableCell>)}
                        </TableRow>)))
                }
            </TableBody>
        </Table>
    )
}

{/*{Object.keys(obj)*/}
{/*    .filter(() => obj.ticker.toLowerCase().includes(inputValueRedux.toLowerCase()))*/}
{/*    .map((key, index) => {*/}
{/*        return (*/}
{/*            <TableCell key={index}>*/}
{/*                {obj[key]}*/}
{/*            </TableCell>*/}
{/*        )*/}
{/*    })*/}
{/*}*/}