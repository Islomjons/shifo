import React from 'react'
import c from "./index.module.css"

const Overlay = ({callback}) => {
  return (
    <div className={c.overlay} onClick={() => {callback(false)}}></div>
  )
}

export { Overlay }