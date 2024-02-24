import { Container } from './styles.js'
import { Heart, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { useAuth } from './../../hooks/authContext'
import { QuantityProductButton } from '../quantityProductButton'

export function ProductCard ({ product, img, price, productId }) {
    const { user } = useAuth()
    return (
        <Container>
            {user.is_admin === 0 ? <Heart className='icon'/> : <Link to={`/edit-product/${productId}`}><Pencil className='icon'/></Link>}
            <img src={img} alt="" />
            <Link to={`/product/${productId}`}>{product}</Link>
            <p>{price}</p>
            {user.is_admin === 0 && <div className='buttons'>
                <QuantityProductButton/>
                <Button>incluir</Button>
            </div>}
        </Container>
    )
}