import { sayHello } from "../src/say-hello"

describe('sayHello', () => {
    it('should return hello muty', () => {
        expect(sayHello('muty')).toBe('hello muty')
    })
})