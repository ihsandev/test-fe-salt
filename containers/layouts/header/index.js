import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import { Nav, Navbar } from "Containers"
import SidebarMobile from './sidebar'

const links = [
  { href: 'home', label: 'Videos', slash: "/", active: true },
  { href: '', label: 'People', slash: "/" },
  { href: 'home', label: 'Documents', slash: "/" },
  { href: '', label: 'Events', slash: "/" },
  { href: 'home', label: 'Communities', slash: "/" },
  { href: '', label: 'Favorites', slash: "/" },
  { href: 'home', label: 'Channels' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

// STYLES
const Wrapper = styled.header`
  background: #ba349f;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 0;
  @media screen and (max-width: 600px) {
    padding: 5px 10px;
  }
`

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Wrapper>
      <SidebarMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Nav links={links} />
    </Wrapper>
  )
}

export default Header
