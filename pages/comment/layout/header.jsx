import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.h1`
padding: 10px;
background-color: yellow;
color: blue;
margin-top: 2px;
`

function Header() {
  return (
    <HeaderTitle>Header</HeaderTitle>
  )
}

export default Header