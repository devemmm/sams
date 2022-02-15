import React from 'react'
import Asidebar from './sub-components/Asidebar'
import Footer from './sub-components/Footer'
import Header from './sub-components/Header'
import Usertable from './sub-components/Usertable'

const Users = () => {
  return (
    <>
      <Header />
      <Asidebar />
      <Usertable />
      <Footer />
    </>
  )
}

export default Users
