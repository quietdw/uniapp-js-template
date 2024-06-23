import 'core-js/actual/array/iterator'
import 'core-js/actual/promise'
import 'core-js/actual/object/assign'
import 'core-js/actual/promise/finally'

import {
  createSSRApp,
} from 'vue'
import App from './App.vue'
import './styles/preflight.css'
import './styles/tailwind.css'
import { setupStore } from '@/store/index.js'

export function createApp() {
  const app = createSSRApp(App)
  // 注册pinia
  setupStore(app)

  return {
	  app,
  }
}
