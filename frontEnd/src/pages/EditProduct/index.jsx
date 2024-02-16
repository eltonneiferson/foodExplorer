import { Container, Content, Ingredients } from './styles.js'
import { Header } from '../../components/Header/index.jsx'
import { Footer } from '../../components/Footer/index.jsx'
import { ChevronLeft } from 'lucide-react'
import { Button } from '../../components/Button/index.jsx'
import { Link, useParams } from 'react-router-dom'
import { Input } from '../../components/Input/index'
import { Upload, X, Plus, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef, useCallback } from 'react'
import { api } from "../../services/api.js"

export function EditProduct() { 
  const [categories, setCategories] = useState([])
  const [ productImageUpload, setProductImageUpload] = useState('')
  const [ productName, setProductName] = useState('')
  const [ productDescription, setProductDescription] = useState('')
  const [ productPrice, setProductPrice] = useState('')
  const [ productIngredients, setProductIngredients] = useState([])
  const [ productCategory, setProductCategory] = useState('')
  const [ productNewCategory, setProductNewCategory] = useState('')
  const [ newIngredient, setNewIngredient] = useState('')
  
  const inputFile = useRef(null)
  const { productId } = useParams()
  
  const fetchProduct = useCallback(async () => {
    try {
        const response = await api.get(`/products/${productId}`)
        const { product, category, ingredients } = response.data

        const allIngredients = []
        ingredients.map((ingredient) => allIngredients.push(ingredient.name))

        setProductImageUpload(product.image)
        setProductName(product.name)
        setProductCategory(category)
        setProductNewCategory(category.id)
        setProductDescription(product.description)
        setProductPrice(product.price)
        setProductIngredients(ingredients)
    } catch (err) {
        console.log(err)
    }
  }, [productId])

  const fetchCategories = useCallback(async () => {
    try {
        const response = await api.get("/products/index")
        const { categories } = response.data
        const filterCategories = categories.filter(category => category.id !== productCategory.id)
        setCategories(filterCategories)
    } catch (err) {
        console.log(err)
    }
  }, [productCategory.id])

  const fetchIngredients = useCallback(async () => {
    try {
        const response = await api.get(`/ingredients/${productId}`)
        const { ingredients } = response.data
        setProductIngredients(ingredients)
    } catch (err) {
        console.log(err)
    }
  }, [productId])

  const addIngredients = () => {
    if (!newIngredient) {
      alert("Informe um ingrediente!")
      return
    }

    api.post("/ingredients", { 
      name: newIngredient,
      product_id: productId
    }).catch( err => {
      err ? alert(err.response.data.message) : alert("Error")
    }).then( () => {
      setNewIngredient('')
      fetchIngredients()
    }).catch(err => {
      err ? alert(err.response.data.message) : alert("Error ao adicionar o ingrediente, tente novamente mais tarde!")
    })
  }

  const removeIngredient = (ingredientId) => {
    api.delete(`/ingredients/${productId}/${ingredientId}`).catch(err => {
      err ? alert(err.response.data.message) : alert("Error")
    }).then(() => {
      fetchIngredients()
    }).catch(err => err ? alert(err.response.data.message) : alert("Error ao remover o ingrediente, tente novamente mais tarde!"))
  }
  
  const updateProduct = () => {
    const file = inputFile.current.files[0]
    const product = new FormData() // Cria um objeto FormData para enviar os dados do produto.
    
    product.append('name', productName)
    product.append('description', productDescription)
    product.append('price', productPrice)
    product.append('image', file)
    product.append('category_id', productNewCategory)
    
    if (newIngredient !== "") {
      alert(`Você não adicionou o ingrediente "${newIngredient.toUpperCase()}"!`)
      return
    }

    switch (true) {
      case !productName:
        return alert('O campo "Nome" não pode ficar em branco!')
    
      case !productCategory:
        return alert('O campo "Categoria" não pode ficar em branco!')
    
      case !productPrice:
        return alert('O campo "Preço" não pode ficar em branco!')
    
      case !productDescription:
        return alert('O campo "Descrição" não pode ficar em branco!')

      default:
    }
    
    api.put(`/products/${productId}`, product).catch((err) => {
        if(err){
          alert(err.response.data.message)
        } else {
          alert("Error")
        }
      }).then(() => {
        alert("Os dados do produto foram atualizados!")
        inputFile.current.value = ''
        setProductImageUpload(product.image)
        fetchProduct()
      }).catch((err) => {
        if(err){
          alert(err.response.data.message)
        } else {
          alert("Falha ao atualizar os dados do produto, tente novamente mais tarde!")
        }
      })
  }

  useEffect(() => {  
    fetchProduct()
    fetchCategories()
    fetchIngredients()
  }, [fetchProduct, fetchCategories, fetchIngredients])

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
          <select id="categories" onChange={e => setProductNewCategory(e.target.value)}>
            <option value={productCategory.id}>{productCategory.category}</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.category}</option>)}
          </select>
          <ChevronDown/>
        </div>
        <Ingredients>
          <p>Ingredientes</p>
          <div>
            {productIngredients.map((ingredient, index) => <button key={index} className='remove' value={ingredient.id} onClick={e => e.preventDefault()}>{ingredient.name}<abbr title="Remover"><X onClick={() => removeIngredient(ingredient.id)}/>
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
        <Button onClick={updateProduct}>Salvar alterações</Button>
      </Content>
      <Footer />
    </Container>
  )
}