<script setup>
import { un } from '@uni-helper/uni-network'
import { useRequest } from 'vue-request'
// import { userInfoStore } from '@/store/modules/user-info'
import { getUserInfo } from '@/api/index.js'

const toast = useToast()
const title = ref(123)
// const { userInfo } = storeToRefs(userInfoStore)

const { data, run, loading } = useRequest(getUserInfo, {
  errorRetryCount: 5,
  errorRetryInterval: 3 * 1000,
})

function xxx() {
  console.log(1222)
  toast.success('成功提示')
  run()
}
</script>

<template>
  <view class="h-200rpx w-200rpx mt-200rpx mb-50rpx flex flex-col mx-auto">
    <nut-button type="info" @click="xxx">
      {{ title }}
    </nut-button>

    <div v-if="loading">
      loading
    </div>
    <div v-else>
      {{ data }}
    </div>
  </view>
</template>

<style></style>
