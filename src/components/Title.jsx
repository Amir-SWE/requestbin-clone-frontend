import { Container, Center } from "@mantine/core"

export default function Title({title}) {
    return (
        <Container style={{paddingBottom:'80px'}}>
            <Center>
                <h1 style={{color:'#e4e6ed', fontSize:'40px', letterSpacing:'6px'}}>
                    {title}
                </h1>
            </Center>
        </Container>
    )
    
}