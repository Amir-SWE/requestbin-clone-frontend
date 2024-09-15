import { Container, Group } from '@mantine/core';
import { ButtonCopy } from './ButtonCopy';

export default function EndPoint({ url }) {
    return (
        <Container>
            <Group justify='center' gap="xl">
                <h2>{url}</h2>
                <ButtonCopy></ButtonCopy>
            </Group>
        </Container>
    )
}