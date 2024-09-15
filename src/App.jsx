import { MantineProvider, Container, Center, createTheme } from '@mantine/core'
import RequestTable from './components/RequestTable'
import Endpoint from './components/EndPoint'

import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import './App.css';

import { requests, endpoint } from './dummyData';

const theme = createTheme({
    fontFamily: 'Monaco'
})

function App() {
    return (
        <MantineProvider defaultColorScheme='dark' theme={theme}>
            <Container style={{paddingBottom:'80px'}}>
                <Center><h1>Request Bin</h1></Center>
            </Container>
            <Endpoint url={endpoint}/>
            <Container style={{paddingTop:'30px'}}>
                <RequestTable records={requests}/>
            </Container>  
        </MantineProvider>
    )
}

export default App
