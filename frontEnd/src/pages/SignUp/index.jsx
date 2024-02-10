import { Container, Form } from './styles.js'
import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from './../../components/Input'
import { useState } from 'react'

import { api } from "../../services/api"

export function SignUp() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function submitSignUp(){
    if (!name || !email || !password){
      return alert("Preencha todos os campos!")
    }
    
    api.post("/users", { name, email, password }).then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    }).catch((err) => {
      if(err){
        alert(err.response.data.message)
      } else {
        alert("Não foi possível realizar o cadastro, tente novamente mais tarde!")
      }
    })
  }
  
  return (
    <Container>
      <Logo/>
      <Form>
        <h2>Crie sua conta</h2>
        <Input id="name" htmlFor="name" type="text" label="Seu nome" placeholder='Exemplo: Maria da Silva' onChange={e => setName(e.target.value)}/>
        <Input id="email" htmlFor="email" type="email" label="Email" placeholder='Exemplo: exemplo@exemplo.com.br' onChange={e => setEmail(e.target.value)}/>
        <Input id="password" htmlFor="password" type="password" label="Senha" placeholder='No mínimo 6 caracteres' onChange={e => setPassword(e.target.value)}/>
        <Button onClick={submitSignUp}>Criar conta</Button>
        <Link to='/'>Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}