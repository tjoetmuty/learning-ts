describe('Array', () => {
    it('should same with javascript', () => {
        const names: string[] = ["cut", "muty", "ahmad"]
        const numbers: number[] = [1, 2, 3]

        console.log(names)
        console.log(numbers)
    })

    it('should support readonly array', () => {
        const names: ReadonlyArray<string> = ["cut", "muty", "ahmad"]
        console.log(names)
        
    })

    it('should support tuple', () => {
        const people: readonly [string, string, number] = ["halo", "muty", 20]
        console.log(people)
    })
})