import React, { useState } from 'react'
import { Row, Col } from "reactstrap"
import styled from 'styled-components'
import Link from 'next/link'
import { Icon } from 'Components'

const ViewImage = styled.div`
  width: 100%;
  height: 70px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 0.8em;
  font-weight: bold;
  margin: 0;
  padding: 0;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    text-decoration: none;
    color: #38243a;
    transition: all 0.2s; 
  }
  &:hover {
    a {
      color: #ba349f;
    }
  }
`
const Desc = styled.div`
  font-size: 0.8em;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  /* display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
`

const Date = styled.div`
  font-size: 0.7em;
  color: #7d7c7c;
  i {
    margin-right: 0.5rem;
    font-size: 1.2em;
  }
`
const NewRow = styled(Row)`
  margin-bottom: 15px;
  padding: 3px;
  box-sizing: border-box;
  transition: all 0.2s ease; 
  position: relative;
  border: ${({ active }) => active ? `1px solid #ba349f` : `none`} ;
  &:hover {
    border: 1px solid #ba349f;
  }
`

const Close = styled.div`
  visibility: ${({ active }) => active ? `visible` : `collapse`};
  opacity: ${({ active }) => active ? 1 : 0};
  color: #fff;
  position: absolute;
  width: 0;
  height: 0;
  cursor: pointer;
  border-right: 50px solid #ba349f;
  border-bottom: 40px solid transparent;
  top: 0;
  right: 0;
  i {
    font-size: 1em;
    font-weight: bold;
    margin-left: 20px;
    margin-bottom: 20px;
  }
`

const NewsActivity = ({ image, title, desc, time }) => {
  const [active, setActive] = useState(false)
  return (
    <NewRow active={active} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <Col md="4" xs="4">
        <ViewImage style={{ backgroundImage: `url(${image})` }} />
      </Col>
      <Col md="7" xs="4">
        <Wrap>
          <Title>
            <Link href="#">
              <a>{title}</a>
            </Link>
          </Title>
          <Desc dangerouslySetInnerHTML={{ __html: desc }} />
          <Date><Icon name="message" />{time}</Date>
        </Wrap>
      </Col>
      <Close active={active}>
        <Icon name="close" />
      </Close>
    </NewRow>
  )
}

export default NewsActivity