import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Side = styled.div`
  display: none;
  @media screen and (max-width: 600px){
    display: block;
    transition: all 0.3s ease-in;
    opacity: ${({ showMenu }) => showMenu ? 1 : 0};
    visibility: ${({ showMenu }) => showMenu ? 'visible' : 'collapse'};
    transform: translateX(${({ showMenu }) => showMenu ? '0' : '-300px'});
    z-index: 999999;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 251px;
    background: rgba(186, 52, 159, 1);
    color: #fff;
    ul {
      display: grid;
      list-style: none;
      .brand {
        font-weight: bold;
        font-size: 1.5em;
        padding: 30px 0;
        color: #fff;
        span {
          font-weight: normal;
        }
      }
      li {
        padding: 10px 5px;
        cursor: pointer;
        transition: all 0.2s;
        a {
          text-decoration: none;
          color: #fff;
        }
        &:hover {
          background-color: #fff;
          color: rgba(186, 52, 159, 1);
        }
      }
    }
  }
`

const Overlay = styled.div`
  visibility: collapse;
  @media screen and (max-width: 600px){
    transition: all 0.1s ease;
    visibility: ${({ showMenu }) => showMenu ? 'visible' : 'collapse'};
    opacity: ${({ showMenu }) => showMenu ? 1 : 0};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(186, 52, 159, 0.5);
    z-index: 99999;
  }
`

const menu = [
  {
    name: 'Videos',
    link: '#'
  },
  {
    name: 'People',
    link: '#'
  },
  {
    name: 'Documents',
    link: '#'
  },
  {
    name: 'Events',
    link: '#'
  },
  {
    name: 'Communities',
    link: '#'
  },
  {
    name: 'Favorites',
    link: '#'
  },
  {
    name: 'Channels',
    link: '#'
  }
]

const SidebarMobile = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <Side showMenu={showMenu}>
        <ul>
          <div className="brand">
            <Link>
              <a>Social <span>Network</span></a>
            </Link>
          </div>
          {
            menu.map((item, i) => {
              return (
                <li key={i}>
                  <Link href={item.url}>
                    <a>{item.name}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Side>
      <Overlay showMenu={showMenu} onClick={() => setShowMenu(false)} />
    </>
  )
}

export default SidebarMobile