import { Container, Results } from './styles.js'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Input } from './../Input/index'
import { Search  } from 'lucide-react'
import { api } from './../../services/api'

export function SearchProducts () {
    const [ product, setProduct] = useState('')
    const [ results, setResults] = useState([])

    useEffect(() => {
        async function searchProduct(){
            try {
                const response = await api.get(`/products/?search=${product}`)                
                setResults(response.data)
            } catch (err) {
                setResults([])
            }
        }
        
        product.trim() == '' ? setResults([]) : searchProduct()

    }, [product])
    

    return (
        <Container>
            <Input id="search" type="text" placeholder='Busque pelo nome do prato ou ingredientes' icon={Search} onChange={(e) => setProduct(e.target.value)}/>
            {product &&
                <Results>
                    {results.length > 0 ? results.map((product) => {
                        const ingredients = product.ingredients.split(',')
                        return (
                            <div className='results' key={product.id}>
                                <img src={`${api.defaults.baseURL}/files/${product.image}`} alt=""/>
                                <div className='product'>
                                <Link to={`/product/${product.id}`}>{product.name + " >"}</Link>
                                <p>{"R$ " + product.price}</p>
                                <div className='ingredients'>
                                    {ingredients.map((ingredient, index) => <span key={index}>{ingredient}</span>)}
                                </div>
                                </div>
                            </div>
                        )
                    }) : <p className='not-found'>Nenhum produto encontrado!</p>}
                </Results>}
        </Container>
    )
}