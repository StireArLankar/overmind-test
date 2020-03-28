export const api = {
  login: async (name, pass) => {
    return new Promise(res => {
      setTimeout(() => {
        res({ name: pass })
      }, 2000)
    })
  },
  logout: async () => {
    return new Promise(res => {
      setTimeout(() => {
        res()
      }, 2000)
    })
  }
}
