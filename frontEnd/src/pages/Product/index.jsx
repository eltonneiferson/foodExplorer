import { Container, Content } from './styles.js'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Minus, Plus, Receipt, ChevronLeft } from 'lucide-react'
import foodB from '../../assets/imgs/foods/image_2.png'
import { Button } from '../../components/Button/index.jsx'
import { Link } from 'react-router-dom'

export function Product() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/"><ChevronLeft/>voltar</Link>
        <div className='description'>
          <img src={foodB} alt="" />
          <div className="about">
            <h2>Salada Ravanello</h2>
            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
            <div className='tags'>
              <span>alface</span>
              <span>cebola</span>
              <span>pão naan</span>
              <span>pepino</span>
              <span>rabanete</span>
              <span>tomate</span>
            </div>
            <div className='buttons'>
              <p>
                <Minus />01<Plus />
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