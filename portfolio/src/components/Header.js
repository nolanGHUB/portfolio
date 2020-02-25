import React from 'react'

//custom components
import Nav from './Nav'

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-title">Nolan Giles</div>
        <div className="header-titles">
          Software Engineer
        </div>
      </div>
      <div className="header-right">
        <Nav />
      </div>
    </div>
  )
}

export default Header