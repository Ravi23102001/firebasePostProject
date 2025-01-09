import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Trial = () => {
  return (
    <div>
        <input type="date" name="" id="" />
        <Link to={'testing'}>Testing page</Link>
        <Outlet />
    </div>
  )
}

export default Trial