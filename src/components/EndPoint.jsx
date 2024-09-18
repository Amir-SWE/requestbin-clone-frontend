import { Container, Group } from '@mantine/core';
import { ButtonCopy } from './ButtonCopy';
import { ButtonNew } from './ButtonNew';
import FancyText from '@carefully-coded/react-text-gradient'

export default function EndPoint({ url }) {
    return (
        <Container>
            <Group justify='center' gap="xl">
                
                <ButtonCopy></ButtonCopy>
                <ButtonNew></ButtonNew>
                <FancyText
                    gradient={{ from: '#dce4f5', to: '#94a8d0', type: 'linear' }}
                    animate
                    animateDuration={1500}
                    >
                    <h1>{url}</h1>
                </FancyText>
                
            </Group>
        </Container>
    )
}