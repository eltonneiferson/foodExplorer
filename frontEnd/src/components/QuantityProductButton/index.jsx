import { Container } from './styles.js'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

export function QuantityProductButton () {
    const [orderQuantity, setProductQuantity] = useState(1)
    const addQuantity = () => orderQuantity == 5 ? '' : setProductQuantity(prevState => prevState + 1)
    const removeQuantity = () => orderQuantity == 1 ? '' : setProductQuantity(prevState => prevState - 1)

    return (
        <Container>
            <Minus onClick={removeQuantity}/>{String(orderQuantity).padStart(2, "0")}<Plus onClick={addQuantity}/>
        </Container>
    )
}