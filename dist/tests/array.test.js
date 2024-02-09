"use strict";
describe('Array', () => {
    it('should same with javascript', () => {
        const names = ["cut", "muty", "ahmad"];
        const numbers = [1, 2, 3];
        console.log(names);
        console.log(numbers);
    });
    it('should support readonly array', () => {
        const names = ["cut", "muty", "ahmad"];
        console.log(names);
    });
    it('should support tuple', () => {
        const people = ["halo", "muty", 20];
        console.log(people);
    });
});
