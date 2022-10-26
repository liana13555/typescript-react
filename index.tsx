import React from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(
  document.getElementById('app') as HTMLElement
)

const App = () => <div>Hi</div>


root.render(<App/>)
