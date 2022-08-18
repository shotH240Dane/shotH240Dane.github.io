
// 子线程无法获取dom，以及使用window和parent等，但可以使用location和navigator
let total = 0
for (let i = 0; i < 100000000; i++) {
  total += i
}

self.postMessage({ total })