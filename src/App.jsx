import { useState } from 'react'
import data from '../public/data'
import './App.css'

import Nav from './Nav'
import Profile from './Profile'
function App() {

  return (
      <div className='container'>
        <Nav />
        <Profile />
      </div>
  )
}

export default App
