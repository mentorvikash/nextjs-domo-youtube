import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
font-size: 31px;
color: ${({theme}) => theme.colors.primary}
`

function CSSJS() {
  return (
    <div>
        <Title>Here we are apply style by use of styled components</Title>
    </div>
  )
}

export default CSSJS