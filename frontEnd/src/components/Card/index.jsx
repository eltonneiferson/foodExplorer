import { Container } from './styles.js'
import { Heart, Minus, Plus, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { useAuth } from './../../hooks/authContext';

export function Card ({ product, img, price, quantity, link }) {
    const { user } = useAuth()
    return (
        <Container>
            {user.is_admin === 0 && <Heart className='icon'/>}
            {user.is_admin === 1 && <Pencil className='icon'/>}
            <img src={img} alt="" />
            <Link to={`/product/${link}`}>{product}</Link>
            <p>{price}</p>
            <div className='buttons'>
                {user.is_admin === 0 && <div><Minus />{quantity}<Plus /></div>}
                {user.is_admin === 0 && <Button>incluir</Button>}
            </div>
        </Container>
    )
}