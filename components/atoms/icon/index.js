import React from "react"
import styled from 'styled-components'

const Icon = ({ name, style, ...props }) => {
  const IconStyle = styled.i`
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    vertical-align: middle;
  `
  return (
    <IconStyle className="material-icons" style={style} {...props}>
      {name}
    </IconStyle>
  )
}

export default Icon
