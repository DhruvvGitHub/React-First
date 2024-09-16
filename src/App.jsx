import React from "react"

const App = () => {
  return(
    <div>
      <h1>First React Webpage</h1>
      <h2>JWT_SECRET = {import.meta.env.VITE_JWT_SECRET}</h2>
    </div>
  )
}

export default App;