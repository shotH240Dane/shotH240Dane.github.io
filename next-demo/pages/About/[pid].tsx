import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Dynamic() {
  const router = useRouter()
  const { pid } = router.query
  useEffect(() => {
    console.log('router', router)
  }, [])
  return (
    <div>通过[xxx]的方式命名的文件夹，会被识别为动态路由，如：http://localhost:3000/About/123 pid=123 Post: { pid }</div>
  )
}