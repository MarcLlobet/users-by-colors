import { hasKeysLeft } from './custom'

describe('hasKeysLeft', () => {
    it('returns true when object has keys', () => {
        expect(hasKeysLeft({ a: 1 })).toBe(true)
    })

    it('returns true when object has keys', () => {
        expect(hasKeysLeft({})).toBe(false)
    })
})
