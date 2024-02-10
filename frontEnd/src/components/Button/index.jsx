import { Container } from './styles.js'

export function Button({ children, ...rest }) {
    return (
        <Container type='button' {...rest}>{children}</Container>
    )
}