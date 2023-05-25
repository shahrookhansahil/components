import React from 'react'

function Header(props) {
  return (
    <div>
        <h1>{props.title ? props.title : 'Default title'}</h1>
        <h2>Developed By {props.name}</h2>
        <h3>{`cool ${props.name}`}</h3>
    </div>
  )
}

export default Header