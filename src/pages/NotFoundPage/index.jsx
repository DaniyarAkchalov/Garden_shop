import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
        <p>Page not found</p>
        <p>Go to <Link to='/'>Home page</Link></p>
    </div>
  )
}