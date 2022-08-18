// console.log('test==', fetch)
// 通过返回数据得到body的流，用在service work中
fetch('./test.json').then(res => {
  // console.log('res==', res)
  // res得到的是请求体的流，需要调用json方法，才能读取到数据，json方法返回的也是promise
  return res.json()
}).then(data => {
  // console.log('data==', data)
})