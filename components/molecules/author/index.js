import React from 'react'
import styled from 'styled-components'

const WrapAuthor = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  color: #fff;
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #d149b6;
  }
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 10px;
`

const Name = styled.h6`
  font-size: 1.2em;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`

const Author = ({ url, name, onHover, onLeave }) => {
  return (
    <WrapAuthor onMouseEnter={onHover} onMouseLeave={onLeave}>
      <Avatar style={{ backgroundImage: `url(${url})` }} />
      <Name>{name}</Name>
    </WrapAuthor>
  )
}

export default Author