import { Container, Content } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../../components/Button/index.jsx'
import { Link } from 'react-router-dom'

export function NewProduct() {
  return (
    <Container>
      <Header />
      <Content>
        <Link to="/"><ChevronLeft/>voltar</Link>
        <h1>Hello World!</h1>
        <Button>Salvar alterações</Button>
      </Content>
      <Footer />
  </Container>
  )
}