import React from 'react'
import SuperChild from './SuperChild'
import { SuperSibling } from './SuperSibling'
export default function Child() {
  return (
    <>
    <div style={{fontSize:"30px"}}>Child</div>
    <SuperChild/>
    <SuperSibling/>
    </>
  )
}
