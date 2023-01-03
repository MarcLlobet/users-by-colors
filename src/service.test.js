import { getUserColorsData } from './service'

const mockData = [1, 2, 3]
const mockResponse = jest.fn(() => Promise.resolve(mockData))

const mockFetch = () =>
    Promise.resolve({
        json: () => mockResponse(),
    })

global.fetch = mockFetch // TODO: move this mock to jest setup

describe('Service', () => {
    it('returns data', async () => {
        const data = await getUserColorsData()
        expect(data).toEqual(mockData)
    })
})
