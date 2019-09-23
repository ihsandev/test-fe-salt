import React from 'react'
import styled from 'styled-components'
import { Icon } from 'Components'

// STYLES
const ButtonStyle = styled.button`
  width: ${({ block }) => block && `100%`};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.5s;
  &:hover {
    background: #fff;
    color: #ba349f;
  }
`

const Button = ({ children, block, icon }) => {
  return (
    <ButtonStyle block={block}>
      <Icon name={icon} style={{ marginRight: '5px' }} />
      {children}
    </ButtonStyle>
  )
}

export default Button