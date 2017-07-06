export default {
  getItem(key) {
    let value
    try {
      value = localStorage.getItem(key)
    } catch (e) {
      if (__DEV__) {
        console.log('localStorage.getItem发生错误, ', e.message)
      }
    }
  },

  setItem(key, value) {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      if (__DEV__) {
        console.log("localStorage.setItem发生错误, ", e.message)
      }
    }
  }
}