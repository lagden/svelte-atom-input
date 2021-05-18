/* globals describe, afterEach, test, expect */

import {cleanup, render} from '@testing-library/svelte'
import {Input} from '../src/input.js'

describe('Input', () => {
	afterEach(cleanup)

	test('should match snapshot default', () => {
		const {container} = render(Input)
		expect(container).toMatchSnapshot()
	})

	test('should match snapshot props', () => {
		const {container} = render(Input, {
			props: {
				class: 'customCss',
				type: 'tel',
				required: true
			}
		})
		expect(container).toMatchSnapshot()
	})

	test('invalid type', () => {
		const {container} = render(Input, {
			props: {
				type: 'xxx'
			}
		})
		expect(container).toMatchSnapshot()
	})
})
