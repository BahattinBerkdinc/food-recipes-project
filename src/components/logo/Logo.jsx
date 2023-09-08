import React from 'react'

const Logo = ({width = { width: '100px' }}) => {
  return (
    <img src={require('../../assets/images/logo/logo.png')} style={{width}} alt="" />
  )
}

export default Logo
