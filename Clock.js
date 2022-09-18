import React, { useState } from 'react'

function Clock() {
      const [clock,setcount] =useState();

       setInterval(()=>{
          const date = new Date();
              setcount(date.toLocaleTimeString())
       })
  return (
    <div>{clock}</div>
  )
}

export default Clock