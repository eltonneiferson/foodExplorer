import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Product } from '../pages/Product'
import { NewProduct } from '../pages/NewProduct'
import { useAuth } from '../hooks/authContext'

export function AppRoutes(){
    
    const { user } = useAuth()

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            {user.is_admin === 1 && <Route path='/newproduct' element={<NewProduct/>}/>}
        </Routes>
    )
}