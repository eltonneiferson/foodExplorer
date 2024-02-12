import { Container, Content } from './styles.js'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Minus, Plus, Receipt, ChevronLeft } from 'lucide-react'
import { Button } from '../../components/Button/index.jsx'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from './../../services/api';

export function Product() {
  const [productDetails, setProductDetails] = useState([])
  const [productIngredients, setProductIngredients] = useState([])
  const [orderQuantity, setProductQuantity] = useState(1)

  const { productId } = useParams()

  function removeQuantity(){
    if (orderQuantity == 1) {
      return
    }
    setProductQuantity(prevState => prevState - 1)
  }

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await api.get(`/products/${productId}`)
          const { product, ingredients } = response.data
              
          setProductDetails(product[0])
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
          <img src={`http://localhost:3333/files/${productDetails.image}`} alt="" />
          <div className="about">
            <h2>{productDetails.name}</h2>
            <p>{productDetails.description}</p>
            <div className='tags'>
              {productIngredients.map(ingredient => <span key={ingredient.id}>{ingredient.name}</span>)}
            </div>
            <div className='buttons'>
              <p>
                <Minus cursor="pointer" onClick={removeQuantity}/>{String(orderQuantity).padStart(2, "0")}<Plus cursor="pointer" onClick={() => setProductQuantity(prevState => prevState + 1)}/>
              </p>
              <Button><Receipt/>pedir&nbsp;&bull; R$ 25,00</Button>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
  </Container>
  )
}