console.log('ntt==', navigator.onLine)
if (navigator.onLine) {
  console.log('onn===============================', Notification.permission)
  if (Notification.permission !== 'granted') {
    console.log('?????????????????????????')
    Notification.requestPermission()
  }
  new Notification('tips', { body: '当前处于离线模式，您访问的是离线资源'})
}