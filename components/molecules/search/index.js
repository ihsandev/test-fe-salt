import React from 'react'
import styled from 'styled-components'
import { Icon } from 'Components'

// STYLES
const SearchStyle = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid #fff;
  font-size: 1em;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 10px rgba(255,255,255,0.5);
  }
`
const WrapIcon = styled.div`
  position: absolute;
  right: 5px;
`

const Search = () => {
  return (
    <SearchStyle>
      <Input placeholder="Find.." />
      <WrapIcon>
        <Icon name="search" />
      </WrapIcon>
    </SearchStyle>
  )
}

export default Search