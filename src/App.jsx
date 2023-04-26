import { useState } from 'react'
import data from '../public/data'
import './App.css'

import Nav from './Nav'
import Profile from './Profile'
function App() {

  const profilesJsx = data.map(item => {
    return <Profile
    key={item.username}
    item={{...item}}
    />
  })


  return (
    <div className='container'>
      <Nav />
      {profilesJsx}
    </div>
  )
}

export default App
