import React from "react";
import {styled, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {removeTicker} from "../../redux/slices/tickersSlice";
import {selectInputValue, selectTickers, selectRemovedTicker} from "../../redux/selectors";

import {ClearButton} from "../ClearButton";
import {SkeletonBox} from "./SkeletonBox";

import AmazonLogo from '../../assets/icons/logos/Amazon_logo.png'
import AppleLogo from '../../assets/icons/logos/Apple_logo.png'
import FacebookLogo from '../../assets/icons/logos/Facebook_logo.png'
import GoogleLogo from '../../assets/icons/logos/Google_logo.png'
import MicrosoftLogo from '../../assets/icons/logos/Microsoft_logo.png'
import TeslaLogo from '../../assets/icons/logos/Tesla_logo.png'

const TABLE_HEADER = ['', 'Ticker', 'Exchange', 'Price, USD', 'Changed, USD', 'Changed, %', 'Dividend', 'Yield', 'Last Trade', '']

const TABLE_ICONS = (path) => {
    switch (path) {
        case 'AAPL':
            return AppleLogo
        break;
        case 'AMZN':
            return AmazonLogo
        break;
        case 'FB':
            return FacebookLogo
        break;
        case 'GOOGL':
            return GoogleLogo
        break;
        case 'MSFT':
            return MicrosoftLogo
        break;
        case 'TSLA':
            return TeslaLogo
        break;
        default:

    }
}

const bgColorFunc = (test) => {
    if (test.includes('-')) {
        return {backgroundColor: '#fa6e8a', color: '#b30435'}
    }

    else if (parseFloat(test) === 0) {
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

    const addPlusToPositiveNum = (num) => {
        if (num > 0) {
            return `+${num}`
        }

        return num
    }

    return (
        <>
            <Table sx={{margin: '40px 0'}}>
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
                            .filter(e => !removedTicker.includes(e.ticker))
                            .map((obj, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <img style={{width: '20px', height: 'auto'}} src={TABLE_ICONS(obj.ticker)} alt=""/>
                                    </TableCell>
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
                                            {/*{obj.change}*/}
                                            {addPlusToPositiveNum(obj.change)}
                                        </TestComponent>
                                    </TableCell>
                                    <TableCell>
                                        <TestComponent sx={bgColorFunc(obj.change_percent)}>
                                            {/*{obj.change_percent}*/}
                                            {addPlusToPositiveNum(obj.change_percent)}
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

                                    <TableCell>
                                        <ClearButton onClick={removeTicker(obj.ticker)} />
                                    </TableCell>
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
        </>
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