import React, {useEffect} from "react";
import './App.css';
import socketIOClient from "socket.io-client";

import {
    Container,
} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {SearchInput} from "./components/SearchInput";
import {setTickers} from "./redux/slices/tickersSlice";
import {selectTimeRange} from "./redux/selectors";
import {FinanceTable} from "./components/FinanceTable";
import {TimeSelect} from "./components/TimeSelect";
import {RemovedTickers} from "./components/RemovedTickers";

const ENDPOINT = 'http://localhost:4000/'
const socket = socketIOClient(ENDPOINT)

function App() {
    const dispatch = useDispatch();

    const timeRange = useSelector(selectTimeRange)

    socket.emit('start', timeRange)

    useEffect(() => {
        socket.on('ticker', (data) => {
            dispatch(setTickers(data))
        })
    }, [socket, timeRange])

    return (
        <div className="App">
            <Container sx={{padding: '50px 0'}}>
                <SearchInput />

                <TimeSelect />

                <FinanceTable />

                <RemovedTickers />
            </Container>
        </div>
    );
}

export default App;
