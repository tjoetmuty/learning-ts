"use strict";
describe('Any', () => {
    it('should support in typescript', () => {
        const person = {
            id: 1,
            name: "cut muts",
            age: 20
        };
        person.age = 19;
        person.nationality = "Indonesia";
        console.log(person);
    });
});
