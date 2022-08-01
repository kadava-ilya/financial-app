import React, {useEffect} from "react";
import './App.css';
import socketIOClient from "socket.io-client";

import {
  Container,
} from "@mui/material";

import {useDispatch, useSelector} from "react-redux";
import {SearchInput} from "./components/SearchInput";
import {selectTimeRange, setTickers} from "./redux/slices/tickersSlice";
import {FinanceTable} from "./components/FinanceTable";
import {TimeSelect} from "./components/TimeSelect";

const ENDPOINT = 'http://localhost:4000/'
const socket = socketIOClient(ENDPOINT)
socket.emit('start')

function App() {
  const dispatch = useDispatch();

  const timeRange = useSelector(selectTimeRange)

  console.log(timeRange)

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
        </Container>
      </div>
  );
}

export default App;
