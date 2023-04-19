import React, { useEffect } from 'react'

export default function FirstEffect() {
    useEffect(()=>{
        console.log('hello');
    },[])
  return (
    <div>Hello</div>
  )
}
