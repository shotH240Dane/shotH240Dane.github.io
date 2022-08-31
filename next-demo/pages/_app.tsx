import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Script from 'next/script'
// import { setGtag } from './utils/dataHub'

const aa = () => {}
function MyApp({ Component, pageProps }: AppProps) {
  const [gtag, setGa] = useState<Function>(aa)
  // const [gtag, setGa] = useState<any>(1111)
  const [load, setLoad] = useState(false)

  const setGtag = () => {
    window.dataLayer = window.dataLayer || [];
    function globalGtag(...argv: any[]) {
      return () => { 
        window.dataLayer.push(argv);
      }
    }
    globalGtag('js', new Date());
    globalGtag('config', 'G-JWMZ65DC4D');
    setGa(globalGtag)
  }

  function dataHubLoad(e: any) {
    setGtag()
    setLoad(true)
    // console.log('gggg', window.dataLayer)
    // setGa(gtag)
  }
  useEffect(() => {
    console.log('6666', gtag)
  }, [gtag])

  console.log('34 gtag: ', gtag, load)
  return <>
    <Script
      id='datahub'
      type="text/javascript"
      src='https://www.googletagmanager.com/gtag/js?id=G-JWMZ65DC4D'
      onLoad={dataHubLoad} />
    {/* <Script type="text/javascript" src='/js/dataHub.js'></Script> */}
    { load && <Component {...pageProps} gtag={gtag} /> }
  </>
}

export default MyApp
