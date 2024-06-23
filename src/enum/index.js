import createEnum from './util.js'

// m-list 的状态
export const LOADING_STATUS = createEnum({
  LOADING: ['loading', '正在获取数据，请稍后'],
  NOMORE: ['nomore', '没有更多数据'],
})
