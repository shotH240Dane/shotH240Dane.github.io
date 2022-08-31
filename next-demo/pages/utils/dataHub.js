export function setGtag(cb) { 
  window.dataLayer = window.dataLayer || [];
  
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-JWMZ65DC4D');
  console.log('dhb=====', gtag)
  cb && cb(gtag)
}

