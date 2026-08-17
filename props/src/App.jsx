import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className='Parent'>
      <Card user='Akshan' age={22} img='https://images.unsplash.com/photo-1768036479363-0810baba6613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/>
      <Card user='Avin' age={19} img='https://images.unsplash.com/vector-1738903339997-300e123d99ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmluamF8ZW58MHx8MHx8fDA%3D'/>
    </div>
  )
}

export default App
