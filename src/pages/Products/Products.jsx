import React from 'react'
import Categorias from '../../components/Categories/Categorias'
import Productos from '../../components/Productos/Productos'
import { ProductsWrapper } from './ProductsStyles'

const Products = () => {
  return (
    <ProductsWrapper>
      <Categorias />
      <Productos />
    </ProductsWrapper>
  )
}

export default Products