import { MantineProvider, Container, createTheme, Group } from "@mantine/core";
import RequestTable from "./components/RequestTable";
import Endpoint from "./components/EndPoint";
import Title from "./components/Title";
import { ButtonCopy } from './components/ButtonCopy';
import { ButtonNew } from './components/ButtonNew';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import "@mantine/core/styles.layer.css";
import "mantine-datatable/styles.layer.css";
import "./App.css";
import { useState } from "react";
import { ButtonGenerateTests } from "./components/ButtonGenerateTests";

const theme = createTheme({
  fontFamily: "Monaco",
});

function App() {
  const [events, setEvents] = useState(null);
  // const [bin_key, setBinKey] = useState(""); // Change this depending on which bin_key we are loading

  return (
    <Router>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Title title="REQUEST BIN" />

        <Routes>
          <Route path="/"
            element={
              <>
              <Container>
                <Group justify='center' gap="xl">
                  <ButtonNew setEvents={ setEvents }></ButtonNew>
                </Group>
              </Container>
              </>
            }
          />
          <Route path="/:binKey" 
            element={
              <>
              <Container>
                <Group justify='center' gap="xl">
                  <ButtonCopy></ButtonCopy>
                  <ButtonNew setEvents={ setEvents }></ButtonNew>
                  <ButtonGenerateTests></ButtonGenerateTests>
                </Group>
              </Container>
                <Endpoint/>
                <Container style={{ paddingTop: "30px" }}>
                  <RequestTable changeEvent={setEvents} records={events} />
                </Container>
              </>
            } 
          />
        </Routes>
      </MantineProvider>
    </Router>
  );
}

export default App;
