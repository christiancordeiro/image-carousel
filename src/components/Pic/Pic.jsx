import React, { useState } from "react"
import "./Pic.css"
import cat1 from "../../img/cat1.png"
import cat2 from "../../img/cat2.png"
import cat3 from "../../img/cat3.png"
import cat4 from "../../img/cat4.png"
import Button from "../Button/Button"

const image = [cat1, cat2, cat3, cat4]

const Pic = () => {
  const [imageIndex, setImageIndex] = useState(0)

  const handleClickPrev = () => {
    setImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : image.length - 1
    )
  }

  const handleClickNext = () => {
    setImageIndex((prevIndex) =>
      prevIndex < image.length - 1 ? prevIndex + 1 : 0
    )
  }

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <div style={containerStyle}>
      <img
        src={image[imageIndex - 1 < 0 ? image.length - 1 : imageIndex - 1]}
        alt="Cat"
      />
      <Button texto="<" onClick={handleClickPrev} />
      <img src={image[imageIndex]} alt="Cat" />
      <Button texto=">" onClick={handleClickNext} />
      <img src={image[(imageIndex + 1) % image.length]} alt="Cat" />
    </div>
  )
}

export default Pic
