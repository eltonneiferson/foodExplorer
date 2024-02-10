import { Container } from './styles.js'

export function Input({label, htmlFor, icon: Icon, ...rest}) {
    return (
        <Container>
            {label && <label htmlFor={htmlFor}>{label}</label>}
            <div>
                {Icon && <Icon/>}
                <input {...rest}/>
            </div>
        </Container>
    )
}