import { Container, Content, Ingredients } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../../components/Button/index.jsx'
import { Link } from 'react-router-dom'
import { Input } from './../../components/Input/index'
import { Upload, X, Plus, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { api } from "../../services/api"

export function NewProduct() {
  const [categories, setCategories] = useState([])
  const [ productImageUpload, setProductImageUpload] = useState('Selecione uma imagem')
  const [ productName, setProductName] = useState('')
  const [ productDescription, setProductDescription] = useState('')
  const [ productPrice, setProductPrice] = useState('')
  const [ productIngredients, setProductIngredients] = useState([])
  const [ productCategory, setProductCategory] = useState('')
  const [ newIngredient, setNewIngredient] = useState('')
  
  const inputFile = useRef(null)

  function addIngredients () {
    if (!newIngredient) {
      alert("Informe um ingrediente!")
      return
    }

    const ingredient = productIngredients.filter(ingredient => ingredient === newIngredient)

    if (ingredient.length > 0) {
      alert(`O ingrediente "${newIngredient.toUpperCase()}" já foi cadastrado!`)
      return
    }

    setProductIngredients(prevState => [...prevState, newIngredient])

    setNewIngredient('')
  }

  function removeIngredient (deleted) {
    setProductIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }
  
  function submitNewProduct() {
    const file = inputFile.current.files[0]
    const product = new FormData() // Cria um objeto FormData para enviar os dados do produto.
    
    product.append('name', productName)
    product.append('description', productDescription)
    product.append('price', productPrice)
    product.append('image', file)
    product.append('category_id', productCategory)
    product.append('ingredients', JSON.stringify(productIngredients))
    
    if (newIngredient !== "") {
      alert(`Você não adicionou o ingrediente "${newIngredient.toUpperCase()}"!`)
      return
    }

    switch (true) {
      case !file:
        return alert('O campo "Imagem do Produto" é obrigatório!')

      case !productName:
        return alert('O campo "Nome" é obrigatório!');
    
      case !productCategory:
        return alert('O campo "Categoria" é obrigatório!');
    
      case !productIngredients || productIngredients.length === 0:
        return alert("Pelo menos um Ingrediente é obrigatório!")
    
      case !productPrice:
        return alert('O campo "Preço" é obrigatório!')
    
      case !productDescription:
        return alert('O campo "Descrição" é obrigatório!')

      default:
    }
    
    api.post('/products', product).catch((err) => {
      if(err){
        alert(err.response.data.message)
      } else {
        alert("Produto cadastrado com sucesso!")
      }
    }).then(() => {
      alert("Produto cadastrado com sucesso!")
      setProductName("")
      setProductCategory("")
      setProductIngredients([])
      setProductPrice("")
      setProductDescription("")
      setProductImageUpload("Selecione uma imagem")
    }).catch((err) => {
      if(err){
        alert(err.response.data.message)
      } else {
        alert("Não foi possível realizar o cadastro, tente novamente mais tarde!")
      }
    })
  }

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await api.get("/products/index")
            const { categories } = response.data
            setCategories(categories)
        } catch (err) {
            console.log(err)
        }
    }
    fetchData()
}, [])

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/"><ChevronLeft/>voltar</Link>
        <h1>Novo prato</h1>
        <div className='input-file'>
          <p>Imagem do prato</p>
          <div>
            <Upload/>
            <label htmlFor="image-upload">{productImageUpload}</label>
            <input id="image-upload" type="file" ref={inputFile} onChange={() => setProductImageUpload(inputFile.current.files[0].name)}/>
          </div>
        </div>
        <Input idInput="product-name" htmlFor="product-name" label="Nome" type="text" placeholder="Ex.:Salada Ceasar" value={productName} onChange={e => setProductName(e.target.value)}/>
        <div className="select">
          <label htmlFor="categories">Categoria</label>
          <select id="categories" value={productCategory} onChange={e => setProductCategory(e.target.value)}>
            <option>Selecione uma categoria</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.category}</option>)}
          </select>
          <ChevronDown/>
        </div>
        <Ingredients>
          <p>Ingredientes</p>
          <div>
            {productIngredients.map((ingredient, index) => <button key={index} className='remove' onClick={e => e.preventDefault()}>{ingredient}<abbr title="Remover"><X onClick={() => removeIngredient(ingredient)}/>
            </abbr></button>)}
            <span className='add'><input className="add" type="text" placeholder="Adicionar" value={newIngredient} onChange={e => setNewIngredient(e.target.value)}/><abbr title="Adicionar">
              <Plus onClick={addIngredients}/>
            </abbr></span>
          </div>
        </Ingredients>
        <Input idInput="price" htmlFor="price" label="Preço" type="text" placeholder="R$ 00,00" value={productPrice} onChange={e => setProductPrice(e.target.value)}/>
        <div className="textarea">
          <label htmlFor="description">Descrição</label>
          <textarea id="description" cols="30" rows="10" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" value={productDescription} onChange={e => setProductDescription(e.target.value)}/>
        </div>
        <Button onClick={submitNewProduct}>Salvar alterações</Button>
      </Content>
      <Footer />
  </Container>
  )
}