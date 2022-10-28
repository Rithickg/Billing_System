import React from 'react'
import {Bill} from '../bill/Bill'

export const Bills = ({bills}) => {
  return (
    <>
        <div className='bill'>
        {bills.map((b)=>(<Bill bill={b}/>))}
        </div>
    </>
  )
}
