import { Container } from './styles.js'
import { Heart, Pencil } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { useAuth } from './../../hooks/authContext'
import { QuantityProductButton } from '../QuantityProductButton'
import { useRef } from 'react'

export function ProductCard ({ product, img, price, description, productId }) {
    const { user } = useAuth()
    const favorite = useRef()

    return (
        <Container>
            {user.is_admin === 0 ? <Heart ref={favorite} className='icon' cursor="pointer" onClick={() => favorite.current.classList.toggle('favorite')}/> : <Link to={`/edit-product/${productId}`}><Pencil className='icon'/></Link>}
            <img src={img} alt="" />
            <Link to={`/product/${productId}`}>{product}</Link>
            <p className='description'>{description}</p>
            <p className='price'>{price}</p>
            {user.is_admin === 0 && <div className='buttons'>
                <QuantityProductButton/>
                <Button>incluir</Button>
            </div>}
        </Container>
    )
}