import { Container } from './styles.js'
import logo from '../../assets/logo.svg'

export function Logo({ isAdmin }) {
    return (
        <Container>
            <img src={logo} alt="Logo do food explorer"/>
            food explorer{isAdmin && <span>admin</span>}
        </Container>
    )
}