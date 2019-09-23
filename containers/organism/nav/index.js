import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Container } from 'reactstrap'

const WrapNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style : none;
    margin: 20px 0;
    li {
      padding: 10px 15px;
      a {
        color: #fff;
        text-decoration: none;
      }
      &:hover {
        border-bottom: 1.5px solid #fff;
      }
      transition: all 0.2s linear;
      &.active {
        border-bottom: 1.5px solid #fff;
      }
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`

const Slash = styled.span`
  margin: 0 ${({ slash }) => slash && `10px` || `0`};
  color: #fff;
`

const Nav = ({ links }) => {
  return (
    <WrapNav>
      <Container>
        <ul>
          {links.map(({ key, href, label, slash, active = false }) => (
            <>
              <li className={active ? 'active' : null} key={key}>
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
              <Slash slash={slash}>{slash}</Slash>
            </>
          ))}
        </ul>
      </Container>
    </WrapNav>
  )
}

export default Nav
