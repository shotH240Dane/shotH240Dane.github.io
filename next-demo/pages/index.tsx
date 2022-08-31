import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

const Home: NextPage = (props:any) => {
  const [tips, setTips] = useState('Success')
  async function mClick() {
    if (typeof Notification === 'undefined') {
      setTips('浏览器不支持Notification Api')
      return
    }
    console.log('通知==', Notification)
    const res = await Notification.requestPermission();
    console.log('res==', res)
    if (res === 'granted') {
      new Notification('tips', { body: '这是一个通知测试' })
    }
  }

  useEffect(() => {
    console.log('test', props)
  }, [props])

  async function openServiceReg() {
    const osr:any = await navigator.serviceWorker.getRegistration()
    console.log('osr==', osr)
    // osr.showNotification(title, options)
    osr.showNotification('测试Registration', {
      body: '这是一段测试用的Registration'
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      {/* <Script type="text/javascript" src='https://www.googletagmanager.com/gtag/js?id=G-JWMZ65DC4D'/>
      <Script type="text/javascript" src='/js/dataHub.js'></Script> */}

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <button onClick={mClick}>open Notification</button>
        <button onClick={openServiceReg}>Open ServiceWorkerReg</button>
        <div>{ tips }</div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
          {/* <Image src="https://img2.baidu.com/it/u=2620458726,1683254021&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313" alt='' width={120} height={120} /> */}
          <Image src="https://resourceservice-uat.musegaming.co/public/1661245336346.png" alt='' width={120} height={120} />
        </a>
      </footer>
    </div>
  )
}

export default Home
