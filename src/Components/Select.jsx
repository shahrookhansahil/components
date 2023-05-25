import React from 'react'
import { useState } from 'react';
function Select(){
  const [myCar, setMyCar] = useState("Sahil");
  const handleChange = (event) => {
    setMyCar(event.target.value)
  }
  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
        <option value="Sahil">Sahil</option>
      </select>
    </form>
  )
 }
export default Select
