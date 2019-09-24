import React, { useState } from 'react'
import styled from "styled-components"
import { Container, Row, Col } from 'reactstrap'
import { Search, Author, Button, Icon } from 'Components'

// STYLES
const Title = styled.h1`
  font-size: 2.2em;
  color: #ffff;
  span {
    font-weight: lighter;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }
`
const RowCustome = styled(Row)`
  align-items: center;
`

const ContainerCustome = styled(Container)`
  padding: 10px 0;
`

const DetailAuthor = styled.div`
  position: absolute;
  /* padding : 20px 30px; */
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 3px 10px rgba(186, 52, 159, 0.5);
  right: 0;
  top: 50px;
  z-index: 10;
  transition: all 0.3s ease;
  transform: translateY(${({ show }) => show ? '0' : '-15px'}); 
  opacity: ${({ show }) => show ? 1 : 0}
  h6 {
    text-align: center;
  }
`

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 20px 50px 10px 50px;
`

const Action = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    padding: 5px 20px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    color: #717171;
    i {
      font-size: 1.2em;
      margin-right: 0.5rem;
    }
    &:hover {
      background-color: #eee;
    }
  }
`

const NewButton = styled(Button)`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const Burger = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    cursor: pointer;
    > div {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin-bottom: 5px;
      &:last-of-type {
        margin-bottom: 0;
      }
    }    
  }
`
const WrapMenu = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Navbar = ({ setShowMenu }) => {
  const [show, setShow] = useState(false)
  return (
    <ContainerCustome>
      <RowCustome>
        <Col md="3" xs="12">
          <WrapMenu>
            <Title>Social <span>Network</span></Title>
            <Burger onClick={() => setShowMenu(true)}>
              <div />
              <div />
              <div />
            </Burger>
          </WrapMenu>
        </Col>
        <Col md="5" xs="4">
          <Search />
        </Col>
        <Col md="auto" xs="4">
          <NewButton block icon="cloud_upload">Upload</NewButton>
        </Col>
        <Col md={{ offset: 1 }}>
          <div style={{ position: 'relative' }}>
            <Author onHover={() => setShow(true)} onLeave={() => setShow(false)} name="Ihsan" url="/static/avatar-placeholder.gif" />
            <DetailAuthor show={show}>
              <Avatar style={{ backgroundImage: `url('/static/avatar-placeholder.gif')` }} />
              <h6>Ihsan</h6>
              <Action>
                <div><Icon name="settings" /> Pengaturan</div>
                <div><Icon name="reply" /> Logout</div>
              </Action>
            </DetailAuthor>
          </div>
        </Col>
      </RowCustome>
    </ContainerCustome>
  )
}

export default Navbar