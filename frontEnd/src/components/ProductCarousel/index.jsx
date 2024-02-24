import { Carousel } from './styles.js'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

import { ProductCard } from '../ProductCard'

import { api } from "../../services/api.js"
import { useEffect, useState } from 'react'

export function ProductCarousel () {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/products/index")
                const { categories, products } = response.data
                setCategories(categories) 
                setProducts(products) 
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()

    }, [])
    
    return (
        <>
            {categories.map((category) => {
                const categoryProducts = products.filter((product) => product.category_id === category.id)
                return (
                    <Carousel key={category.id}>
                        <h1>{category.category}</h1>
                        <Swiper modules={[ Navigation ]} slidesPerView={2} spaceBetween={35} navigation={true} grabCursor={true} breakpoints={{ 640: {slidesPerView: 2, spaceBetween: 0}, 768: { slidesPerView: 3, spaceBetween: 120}, 1100: { slidesPerView: 4, spaceBetween: 180 }}} loop>
                            {categoryProducts.map((product) => {
                                return (
                                    <SwiperSlide key={product.id}>
                                        <ProductCard product={product.name + " >"} img={`${api.defaults.baseURL}/files/${product.image}`} price={"R$ " + product.price} productId={product.id}/>
                                    </SwiperSlide>
                                )
                            }
                            )}
                        </Swiper>
                    </Carousel>
                )
            })}
        </>
    )
}