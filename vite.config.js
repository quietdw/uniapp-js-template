import { defineConfig } from 'vite'
import nested from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import postcssPresetEnv from 'postcss-preset-env'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import UniLayouts from '@uni-helper/vite-plugin-uni-layouts'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import tailwindcssConfig from './tailwind.config.js' // 注意匹配实际文件

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es6',
    cssTarget: 'chrome61', // https://cn.vitejs.dev/config/build-options.html#build-csstarget
  },
  css: {
    postcss: {
      plugins: [
        nested(),
        tailwindcss({
          config: tailwindcssConfig,
        }),
        postcssPresetEnv({
          stage: 3,
          features: { 'nesting-rules': false },
        }),
      ],
    },
  },
  plugins: [
    UniLayouts(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        {
          'nutui-uniapp/composables': [
            // 在这里添加需要自动导入的API
            'useToast',
          ],
        },
      ],
      dts: './src/auto-imports.d.ts',
      vueTemplate: true,
    }),

    uni(),
    uniTailwind({
      /* options */
    }),

  ],
})
