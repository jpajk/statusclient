
// import store from '../store'

export function createWebsocket (url) {
  // let token = store.getters.token

  let socket = new WebSocket(`ws://localhost:8888/${url}`) // dev

  socket.yada = 5

  return socket
}
