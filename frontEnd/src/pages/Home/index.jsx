import { Container, Content, PresentationCard } from './styles.js'
import foods from '../../assets/imgs/card.png'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Products } from '../../components/Products'

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <PresentationCard>
          <img src={foods} alt="" />
          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </PresentationCard>
        <Products/>
      </Content>
      <Footer />
  </Container>
  )
}1