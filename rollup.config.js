import resolve from '@rollup/plugin-node-resolve'
import svelte from 'rollup-plugin-svelte'

const ignoreWarnings = new Set([
	'a11y-no-onchange',
	'a11y-label-has-associated-control',
	'css-unused-selector'
])

export default {
	input: 'src/label.js',
	output: [
		{
			file: 'dist/label.js',
			format: 'es'
		}
	],
	plugins: [
		svelte({
			emitCss: false,
			onwarn(warning, handler) {
				// console.log('warning.code', warning.code)
				if (ignoreWarnings.has(warning.code)) {
					return
				}
				handler(warning)
			}
		}),
		resolve({browser: true})
	]
}
