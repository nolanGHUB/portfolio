import React from 'react'

//custom components
import Nav from './Nav'

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">NOLAN GILES</div>
      <div className="header-titles">
        Software Engineer
      </div>
      <Nav />
    </div>
  )
}

export default Header