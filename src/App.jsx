import { MantineProvider, Container, createTheme } from "@mantine/core";
import RequestTable from "./components/RequestTable";
import Endpoint from "./components/EndPoint";
import Title from "./components/Title";
import { Routes, Route, Link, useMatch, useNavigate } from "react-router-dom";

import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "./App.css";

import { requests } from "./dummyData";

import { useEffect, useState } from "react";

import { getAllEvents, create } from "../httpRequests";

const theme = createTheme({
  fontFamily: "Monaco",
});

function App() {
  const [events, setEvents] = useState(null);
  // const [bin_key, setBinKey] = useState(""); // Change this depending on which bin_key we are loading

  const bin_key = "d31be1416126253f1ab4"; // change with your own bin key

  const endpoint = "http://localhost:3001/" + bin_key;
  // CHANGE ABOVE ENDPOINT WITH BACKEND URL IN .env FILE

  // async function createBin() {
  //   const bin = await create();
  //   console.log(bin);
  //   setBinKey(bin);
  // }
  // useEffect(() => {
  //   createBin();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const events = await getAllEvents(bin_key);
        setEvents(events);
      } catch (error) {
        console.error("Error with fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // const routes = (
  //   <Routes>
  //     <Route path="/" exact>
  //       <div>hi</div>
  //     </Route>
  //     <Route path="/view/:bin_key" exact>
  //       <MantineProvider defaultColorScheme="dark" theme={theme}>
  //         <Title title="REQUEST BIN" />
  //         <Endpoint url={endpoint} />
  //         <Container style={{ paddingTop: "30px" }}>
  //           <RequestTable
  //             key={bin_key}
  //             changeEvent={setEvents}
  //             records={events}
  //           />
  //         </Container>
  //       </MantineProvider>
  //     </Route>
  //     <Redirect to="/view/:bin_key" />
  //   </Routes>
  // );

  // return (
  //   <Routes>
  //     <Route path="/" element={<div>hi</div>} />
  //     <Route
  //       path="/view/:bin_key"
  //       element={
  //         <MantineProvider defaultColorScheme="dark" theme={theme}>
  //           <Title title="REQUEST BIN" />
  //           <Endpoint url={endpoint} />
  //           <Container style={{ paddingTop: "30px" }}>
  //             <RequestTable
  //               key={bin_key}
  //               changeEvent={setEvents}
  //               records={events}
  //             />
  //           </Container>
  //         </MantineProvider>
  //       }
  //     />
  //   </Routes>
  // );

  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <Title title="REQUEST BIN" />
      <Endpoint url={endpoint} />
      <Container style={{ paddingTop: "30px" }}>
        <RequestTable key={bin_key} changeEvent={setEvents} records={events} />
      </Container>
    </MantineProvider>
  );
}

export default App;
