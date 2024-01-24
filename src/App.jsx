import React from "react"
import Pic from "./components/pic/pic"

const App = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          height: "100vh",
          "@media (max-width: 800px)": {
            height: "50vh",
          },
        }}
      >
        <h1>Gallery</h1>
        <Pic />
      </div>
    </>
  )
}

export default App
