import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div  id='Right' className='h-full rounded-4xl flex overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
      {props.users.map(function(ele,idx){
          return <RightCard key={idx} id={idx} img={ele.img} tag={ele.tag}/>
      })}
    </div>
  )
}

export default RightContent
