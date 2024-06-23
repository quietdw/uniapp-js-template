import un from '@uni-helper/uni-network'
import qs from 'qs'
import { DefaultBaseUrl, DefaultHeaders } from '@/constants'

const instance = un.create({
  baseUrl: DefaultBaseUrl,
  timeout: 30_000,
  paramsSerializer: (params) => {
    const query = qs.stringify(
      Object.fromEntries(
        Object.entries(params).filter(
          ([, v]) => !['undefined', 'null', undefined, null].includes(v?.toString() ?? v),
        ),
      ),
    )
    return query
  },
})

instance.interceptors.request.use((config) => {
  // const authStore = useAuthStore()
  // config.headers = {
  //   ...DefaultHeaders,
  //   'token': authStore.token,
  //   'X-Token': authStore.token,
  //   'X-Access-Token': authStore.token,
  //   ...config.headers,
  // }
  return config
})
instance.interceptors.response.use((response) => {
  const data = response

  if (response.config?.showError ?? true) {
    //   showNetworkError({
    //     response: response as unknown as IUnResponse,
    //     error: data?.data as unknown as IUnError,
    //     type: data.config?.showErrorType,
    //   })
    uni.showToast(data?.msg)
    // uni.showModal({
    //   title: data?.msg,
    //   showCancel: true,
    // })
  }
  return data
})

export { instance as unInstance }
