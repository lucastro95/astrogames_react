import React from 'react'
import { Link } from 'react-router-dom'
import { NotFoundWrapper } from './NotFoundStyles'

const NotFound = () => {
  return (
    <NotFoundWrapper>
        <img src="https://i.ibb.co/gzgQz6b/404-img.png" alt="Not Found Page" />
        <h2>¡Upss!</h2>
        <p>Parece que te perdiste</p>
        <Link to='/'>Volver a la página principal</Link>
    </NotFoundWrapper>
  )
}

export default NotFound