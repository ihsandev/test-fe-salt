import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { Icon } from 'Components'
import Link from 'next/link'

const Wrapper = styled.footer`
  background-color: #ba349f;
  color: #ffff;
  padding: 30px 0;
  ul {
    display: flex;
    justify-items: flex-start;
    padding: 0;
    margin: 0;
    list-style: none;
    a {
      color: #fff;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    ul {
      a {
        font-size: 0.8em;
      }
      flex-direction: column;
      > div {
        display: none;
      }
    }
  }
`

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  > div {
    display: flex;
    margin-right: 1rem;
    /* background-color: #fff; */
    width: 35px;
    height: 35px;
    cursor: pointer;
    img {
      width: 25px;
      height: 100%;
    }
  }
`

const Slash = styled.span`
  margin: 0 ${({ slash }) => slash && `10px` || `0`};
  color: #fff;
  @media screen and (max-width: 600px) {
   display: none;
  }
`

const links = [
  { href: 'home', label: 'About', slash: "/" },
  { href: '', label: 'For Bussiness', slash: "/" },
  { href: 'home', label: 'Suggestions', slash: "/" },
  { href: '', label: 'Help & FAQ', slash: "/" },
  { href: 'home', label: 'Contacts', slash: "/" },
  { href: '', label: 'Pricing', slash: "/" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Footer = () => (
  <Wrapper>
    <Container>
      <Row>
        <Col md="12" xs="12">
          <SocialMedia>
            <div><img src="/static/facebook.svg" /></div>
            <div><img src="/static/linked.svg" /></div>
            <div><img src="/static/instagram.svg" /></div>
          </SocialMedia>
        </Col>
      </Row>
      <Row style={{ margin: "30px 0" }}>
        <Col md="12" xs="12">
          <ul>
            {links.map((item, i) => (
              <>
                <li className={item.active ? 'active' : null} key={i}>
                  <Link href={item.href}>
                    <a>{item.label}</a>
                  </Link>
                </li>
                <Slash slash={item.slash}>{item.slash}</Slash>
              </>
            ))}
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="12" xs="12">
          <p><b>&copy;CopyRight</b> by Ihsan 2019 Test FE Dev Salt.id</p>
        </Col>
        <Col md="12" xs="12">
          <ul>
            <li>
              <Link href="#">
                <a>Privacy</a>
              </Link>
            </li>
            <div style={{ margin: "0 10px" }}>/</div>
            <li>
              <Link href="#">
                <a>Terms</a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
