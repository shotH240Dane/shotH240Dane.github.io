
// 生命周期

/**
 * 每当注册一个新的service worker时，install会触发
 * 但activate不会执行,新的service worker会进入一个等待状态
 * 可以通过skipWaiting直接激活新的service worker
 * skipWaiting返回的是一个promise,
 * 但直接使用的话可能会出现skipWaiting()还未执行完，就直接进行activate的方法调用了
 * 加个witUntil可以保证skipWaiting执行完后再进入到activate
 */
// install service worker 注册成功时触发 缓存静态资源
self.addEventListener('install', e => {
  // 只要sw文件发送改变，install事件会再次触发
  console.log('install', e)
  // skipWaiting 每次注册会让他跳过等待，直接激活新的service worker
  // skipWaiting返回的是一个promise,但直接
  // self.skipWaiting() 
  e.waitUntil(self.skipWaiting())
})

/**
 * service worker激活后，会在下一次刷新页面的时候才会生效
 * 可通过self.clients.claim()立即获得控制权 
 */
// activate service worker激活时触发 删除旧资源
self.addEventListener('activate', e => {
  // 当有旧的service worker存在时，activate不会执行
  console.log('activate', e)
  e.waitUntil(self.clients.claim())
})
// fetch 发送请求时触发
self.addEventListener('fetch', e => {
  console.log('fetch', e)
})
