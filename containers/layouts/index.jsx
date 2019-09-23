import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'

const Content = styled.main`

`

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  )
}

export default Layout