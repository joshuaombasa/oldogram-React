import { useState } from 'react'
import data from '../public/data'
import './App.css'

import Nav from './Nav'
import Profile from './Profile'
function App() {

  const profilesJsx = data.map(item => {
    return <Profile
      name={item.name}
      username={item.username}
      location={item.location}
      avatar={item.avatar}
      post={item.post}
      comment={item.comment}
      likes={item.likes}
    />
  })

console.log(profilesJsx)

  return (
    <div className='container'>
      <Nav />
      <Profile />
      <Profile />
      <Profile />
    </div>
  )
}

export default App
