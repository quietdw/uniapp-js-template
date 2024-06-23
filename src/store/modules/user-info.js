import { defineStore } from 'pinia'

export const userInfoStore = defineStore('userInfoStore', {
  state: () => ({
    userInfo: { a: 1 },
    // 用户信息
    // userInfo: uni.getStorageSync('userInfo'),
  }),
  actions: {
    setUserInfo(value) {
      uni.setStorageSync('userInfo', value)
      this.userInfo = value
    },

  },
})
