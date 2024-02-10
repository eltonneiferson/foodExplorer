import { Container } from './styles.js'
import { Heart, Minus, Plus  } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../Button'

export function Card ({ product, img, price, quantity }) {
    return (
        <Container>
            <Heart className='heart'/>
            <img src={img} alt="" />
            <Link to='/product/1'>{product}</Link>
            <p>{price}</p>
            <div className='buttons'>
                <div>
                    <Minus />{quantity}<Plus />
                </div>
                <Button>incluir</Button>
            </div>
        </Container>
    )
}