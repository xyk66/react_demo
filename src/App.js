import React from 'react'
import Login from './Components/Home'
import Main from './Components/Main'

import {Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
        </Routes>
    </div>
  )
}
