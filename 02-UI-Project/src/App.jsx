import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/section1/Navbar'

const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1579389083395-4507e98b5e67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1542767352-e98201e84ed8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Underbanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
