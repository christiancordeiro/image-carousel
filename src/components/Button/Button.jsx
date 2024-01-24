import React, { useState } from "react"
import "./Button.css"

function Button({ texto, onClick }) {
  return <button onClick={onClick}>{texto}</button>
}

export default Button
