import { Container, Group } from '@mantine/core';
import { ButtonCopy } from './ButtonCopy';
import { ButtonNew } from './ButtonNew';
import FancyText from '@carefully-coded/react-text-gradient'
import { useParams } from 'react-router-dom';

export default function EndPoint() {
    const { binKey } = useParams();
    const fullUrl = import.meta.env.VITE_BACKEND_URL + "/" + binKey;

    return (
        <Container>
            <Group justify='center' gap="xl">
                <FancyText
                    gradient={{ from: '#dce4f5', to: '#94a8d0', type: 'linear' }}
                    animate
                    animateDuration={1500}
                    >
                    <h1>{fullUrl}</h1>
                </FancyText>
                
            </Group>
        </Container>
    )
}