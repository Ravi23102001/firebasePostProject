import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <>
    <div>Not Found </div>
    <Link to={'/'}>Go to Home page</Link>
    </>
  )
}

export default NotFoundPage