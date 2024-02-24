import { Container, Content } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { Receipt, ChevronLeft } from 'lucide-react'
import { Button } from '../../components/Button/index.jsx'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api.js'
import { useAuth } from '../../hooks/authContext.jsx'
import { QuantityProductButton } from './../../components/quantityProductButton'

export function ProductDetails() {
  const [productDetails, setProductDetails] = useState([])
  const [productIngredients, setProductIngredients] = useState([])

  const { productId } = useParams()
  const { user } = useAuth()

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await api.get(`/products/${productId}`)
          const { product, ingredients } = response.data
              
          setProductDetails(product)
          setProductIngredients(ingredients)
        } catch (err) {
          console.log(err)
        }
      }
      fetchData()
  }, [productId])

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/"><ChevronLeft/>voltar</Link>
        <div className='description'>
          {<img src={`${api.defaults.baseURL}/files/${productDetails.image}`} alt="" />}
          <div className="about">
            <h2>{productDetails.name}</h2>
            <p>{productDetails.description}</p>
            <div className='tags'>
              {productIngredients.map(ingredient => <span key={ingredient.id}>{ingredient.name}</span>)}
            </div>
            {user.is_admin === 1 ? <Button><Link to={`/edit-product/${productDetails.id}`}>Editar prato</Link></Button> : 
            <div className='buttons'>
              <QuantityProductButton/>
              <Button><Receipt/>pedir&nbsp;&bull; R$ 25,00</Button>
            </div>}
          </div>
        </div>
      </Content>
      <Footer />
  </Container>
  )
}