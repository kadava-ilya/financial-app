import React, {useEffect} from "react";
import './App.css';
import socket from "./socket/socket";

import {
    Container,
} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {SearchInput} from "./components/SearchInput";
import {setTickers} from "./redux/slices/tickersSlice";
import {selectInputValue, selectRemovedTicker, selectTickers, selectTimeRange} from "./redux/selectors";
import {FinanceTable} from "./components/FinanceTable";
import {TimeSelect} from "./components/TimeSelect";
import {RemovedTickers} from "./components/RemovedTickers";

function App() {
    const dispatch = useDispatch();
    const timeRange = useSelector(selectTimeRange)

    useEffect(() => {
        socket.emit('start', timeRange)

        socket.on('ticker', (data) => {
            dispatch(setTickers(data))
        })
    }, [socket, timeRange])

    const tickersData = useSelector(selectTickers);
    const inputValue = useSelector(selectInputValue);
    const removedTicker = useSelector(selectRemovedTicker);

    return (
        <div className="App">
            <Container sx={{padding: '50px 0'}}>
                <SearchInput />

                <TimeSelect />

                <FinanceTable
                    tickersData={tickersData}
                    removedTicker={removedTicker}
                    inputValue={inputValue}
                />

                <RemovedTickers />
            </Container>
        </div>
    );
}

export default App;
