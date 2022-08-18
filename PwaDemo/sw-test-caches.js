const CACHE_NAME = 'cache_v5'
self.addEventListener('install', async (e) => {
  // console.log('install', e)
  // 打开(设置)缓存
  const cache = await caches.open(CACHE_NAME)
  // 配置需要缓存的文件
  await cache.addAll([
    '/index.html',
    '/style.css',
    '/fetch.js',
    '/test.json',
    '/images/fox1.jpg',
    '/images/fox2.jpg',
    '/images/fox3.jpg',
    '/images/fox4.jpg',
    '/manifest.webmanifest'
  ])
  await self.skipWaiting()
})

self.addEventListener('activate', async (e) => {
  // console.log('activate', e)
  // 清除旧资源
  const keys = await caches.keys()
  // console.log('keys', keys)
  keys.forEach(key => {
    // 如果版本不一样，则清除旧资源
    if (key !== CACHE_NAME) {
      caches.delete(key)
    }
  })
  await self.clients.claim()
})
// fetch 发送请求时触发
self.addEventListener('fetch', e => {
  // console.log('fetch', e.request)
  // 缓存策略
  const req = e.request
  e.respondWith(networkFirst(req))
})

// 网络优先
async function networkFirst(req) {
  console.log('network===', req)
  // 有网络则使用网络资源，没有则使用缓存资源
  try {
    const res = await fetch(req)
    return res
  } catch (error) {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(req)
    console.log('cached====', cached)
    return cached
  }
  
}
