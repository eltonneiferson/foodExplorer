import { Container } from './styles.js'

export function Input({label, htmlFor, idInput, icon: Icon, ...rest}) {
    return (
        <Container>
            {label && <label htmlFor={htmlFor}>{label}</label>}
            <div>
                {Icon && <Icon/>}
                <input id={idInput} {...rest}/>
            </div>
        </Container>
    )
}