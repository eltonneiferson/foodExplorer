import { useState } from 'react'
import { Container, Form } from './styles.js'
import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input'

import { useAuth } from '../../hooks/authContext'

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  function userSignIn() {
    signIn({email, password})
  }

  return (
  <Container>
    <Logo/>
    <Form>
      <h2>Faça Login</h2>
      <Input id="email" htmlFor="email" type="email" label="Email" placeholder='Exemplo: email@email.com.br' onChange={e => setEmail(e.target.value)}/>
      <Input id="password" htmlFor="password" type="password" label="Senha" placeholder='No mínimo 6 caracteres' onChange={e => setPassword(e.target.value)}/>
      <Button onClick={userSignIn}>Entrar</Button>
      <Link to='/register'>Crie uma conta</Link>
    </Form>
  </Container>
  )
}