import { unInstance } from '@/service'

export function getUserInfo() {
  return unInstance.get('user-info')
}
