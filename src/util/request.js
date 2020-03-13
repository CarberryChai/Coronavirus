import { message } from 'antd'
export default function request(url) {
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      message.error('出错啦~')
      setTimeout(() => {
        window.location.href = '/'
      }, 1000)
    })
    .catch(err => console.error(err.message))
}
