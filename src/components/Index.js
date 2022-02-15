import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './sub-components/Contact'
import Footer from './sub-components/Footer'

const Index = () => {
  return (
    <>
      <div>
        <Link to='/home'>Go Home</Link>
      </div>
      <Contact />
      <Footer />
    </>
  )
}

export default Index
