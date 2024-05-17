import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Homes from './Home.jsx'
import Create from './Create.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Update from './Update.jsx'
import App1 from './App1.jsx'
import Login from './Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <hr />

      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homes/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/edit/:id' element={<Update/>}></Route>
          <Route path='/loginPage' element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
      {/* <hr /> */}
      {/* <App1/> */}
    </>
  )
}

export default App
