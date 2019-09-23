import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from "Components";

const CardItem = styled.div`
  /* border: 1px solid purple; */
  height: 19.5vh;
  padding: 11px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-position-y: -20px;
  overflow: hidden;
  label {
    background: #b560a4;
    color: #ffff;
    font-weight: bolder;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Plus = styled.div`
  visibility: ${({ active, show }) => active || show ? `visible` : `collapse`};
  opacity: ${({ active, show }) => active || show ? 1 : 0};
  color: #fff;
  position: absolute;
  width: 0;
  height: 0;
  cursor: pointer;
  border-right: 50px solid #ba349f;
  border-bottom: 30px solid transparent;
  top: 0;
  right: 0;
  i {
    font-size: 1em;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 20px;
  }
`

const ChannelItem = ({ label, image, active }) => {
  const [show, setShow] = useState(false)
  return (
    <CardItem style={{ backgroundImage: `url(${image})` }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <label>{label}</label>
      <Plus active={active} show={show}>
        <Icon name="add" />
      </Plus>
    </CardItem>
  )
}

export default ChannelItem