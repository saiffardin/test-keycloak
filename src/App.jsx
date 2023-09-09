/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import Protected from './components/Protected'
import Public from './components/Public'
import useAuth from './hooks/useAuth'

function App() {

  const isLogin = useAuth()

  return (
    <>
      {isLogin ? <Protected/> : <Public/>}
    </>
  )
}

export default App
