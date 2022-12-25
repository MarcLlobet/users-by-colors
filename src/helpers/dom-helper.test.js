/**
 * @jest-environment jsdom
 */

import { getDOM } from './dom-helper'

describe('getDOM', () => {
    it('returns dom', async () => {
        const dom = getDOM({ element: 'p', class: 'hi' })

        const p = document.createElement('p')
        p.setAttribute('class', 'hi')

        expect(dom).toEqual(p)
    })

    it('returns div as default', async () => {
        const dom = getDOM()

        const div = document.createElement('div')

        expect(dom).toEqual(div)
    })
})
