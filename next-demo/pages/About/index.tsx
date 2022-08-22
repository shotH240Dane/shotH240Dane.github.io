import React, { useState, useEffect } from 'react'
import style from './css/index.module.scss'
export default function About() {
  useEffect(() => {
    console.log('==', process.env, process.env.NEXT_PUBLIC_NODE_ENV)
  }, [])
  return (
    <div className={style.main}>
      <div className={style.box1}></div>
      <div className={style.box2}></div>
    </div>
  )
}