import React from "react";
import {styled, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {removeTicker} from "../../redux/slices/tickersSlice";
import {selectInputValue, selectTickers, selectRemovedTicker} from "../../redux/selectors";

import {ClearButton} from "../ClearButton";
import {SkeletonBox} from "./SkeletonBox";
import {TABLE_HEADER} from "../../utils/constants";
import {TABLE_ICONS} from "../../utils/constants";

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
                            <TableCol key={index}>
                                {title}
                            </TableCol>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickersData.length
                        ? tickersData
                            .filter((el) => el.ticker.toLowerCase().includes(inputValueRedux.toLowerCase()))
                            .filter(e => !removedTicker.includes(e.ticker))
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
                                        <TextWithActiveBG sx={bgColorFunc(obj.change)}>
                                            {addPlusToPositiveNum(obj.change)}
                                        </TextWithActiveBG>
                                    </TableCol>
                                    <TableCol>
                                        <TextWithActiveBG sx={bgColorFunc(obj.change_percent)}>
                                            {addPlusToPositiveNum(obj.change_percent)}
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
