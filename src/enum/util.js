/**
 * 枚举定义工具
 * 示例：
 * const STATUS = createEnum({
 *     ACTIVE: [1, 'active'],
 *     INACTIVE: [2, 'inactive']
 * })
 * 通过枚举值列表：STATUS.list
 * 获取枚举值：STATUS.ACTIVE
 * 获取枚举描述：STATUS.getDesc('ACTIVE')
 * 通过枚举值获取描述：STATUS.getDescFromValue(STATUS.INACTIVE)
 */
export default function createEnum(definition) {
  const strToValueMap = {}
  const numToDescMap = {}
  const list = []
  const listNotEmpty = []
  for (const enumName of Object.keys(definition)) {
    const [value, desc] = definition[enumName]
    strToValueMap[enumName] = value
    numToDescMap[value] = desc
    list.push({ label: desc, value })
  }
  listNotEmpty.push(...list.filter((item) => item.value !== ''))
  return Object.freeze({
    list,
    listNotEmpty,
    ...strToValueMap,
    getDesc(enumName) {
      return (definition[enumName] && definition[enumName][1]) || ''
    },
    getDescFromValue(value) {
      return numToDescMap[value] || ''
    },
  })
}
