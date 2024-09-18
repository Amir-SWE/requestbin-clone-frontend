import { MantineProvider, Container, createTheme } from '@mantine/core'
import RequestTable from './components/RequestTable'
import Endpoint from './components/EndPoint'
import Title from './components/Title'

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
            <Title title='REQUEST BIN'/>
            <Endpoint url={endpoint}/>
            <Container style={{paddingTop:'30px'}}>
                <RequestTable records={requests}/>
            </Container>  
        </MantineProvider>
    )
}

export default App
