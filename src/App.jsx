import { MantineProvider, Container, createTheme } from '@mantine/core'
import RequestTable from './components/RequestTable'
import Endpoint from './components/EndPoint'
import Title from './components/Title'

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import './App.css';

import { requests, endpoint } from './dummyData';

import { useEffect, useState } from 'react';

const theme = createTheme({
    fontFamily: 'Monaco'
})

function App() {
  const [data, setData] = useState(null);
  const bin_key = 1; // Change this depending on which bin_key we are loading

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/view/${bin_key}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error with fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

    return (
        <MantineProvider defaultColorScheme='dark' theme={theme}>
            <Title title='REQUEST BIN'/>
            <Endpoint url={endpoint}/>
            <Container style={{paddingTop:'30px'}}>
                <RequestTable records={data}/>
            </Container>  
        </MantineProvider>
    )
}

export default App
