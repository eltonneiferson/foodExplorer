import { Container } from './styles.js'
import logo from '../../assets/logo.svg'
import { useAuth } from '../../hooks/authContext'

export function Logo() {
    const { user } = useAuth()

    return (
        <Container>
            <img src={logo} alt="Logo do food explorer"/>
            food explorer{!user || user.is_admin === 0 ? '' : user.is_admin === 1 && <span>admin</span>}
        </Container>
    )
}