import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'
import { RegisterProduct } from '../pages/RegisterProduct'
import { UpdateProduct } from '../pages/UpdateProduct'
import { useAuth } from '../hooks/authContext'

export function AppRoutes(){
    
    const { user } = useAuth()

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:productId' element={<ProductDetails/>}/>
            {user.is_admin === 1 && <Route path='/edit-product/:productId' element={<UpdateProduct/>}/>}
            {user.is_admin === 1 && <Route path='/new-product' element={<RegisterProduct/>}/>}
        </Routes>
    )
}