import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/ // .vue
			],
			imports: ['vue', '@vueuse/core'],
			dts: true,
			eslintrc: {
				enabled: true // Default `false`
			},
			dirs: [
				// './hooks',
				'./composables' // only root modules
				// './composables/**', // all nested modules
				// ...
			]
		}),
		Components(),
		Unocss({
			presets: [presetUno()]
		})
	]
})
