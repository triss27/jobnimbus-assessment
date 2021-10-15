const hasMatchingBrackets = require('../bracketFunctions.js');

describe("brackFunctions", () => {

    test(`'{}' should return true`, () => {
        expect(hasMatchingBrackets('{}')).toBe(true);
    });
    
    test(`'}{' should return false`, () => {
        expect(hasMatchingBrackets('}{')).toBe(false);
    });
    
    test(`'{{}' should return false`, () => {
        expect(hasMatchingBrackets('{{}')).toBe(false);
    });
    
    test(`'' should return true`, () => {
        expect(hasMatchingBrackets('')).toBe(true);
    });
    
    test(`'{abc...xyz}' should return true`, () => {
        expect(hasMatchingBrackets('{abc...xyz}')).toBe(true);
    });
    
    test(`'a{{{b}}}c' should return true`, () => {
        expect(hasMatchingBrackets('a{{{b}}}c')).toBe(true);
    });

    test(`'a{{{}b{}}}}c' should return true`, () => {
        expect(hasMatchingBrackets('a{{{}b{}}}}c')).toBe(false);
    });

    test(`'!{@#$%^&*()}' should return true`, () => {
        expect(hasMatchingBrackets('!@#$%^&*(){}')).toBe(true);
    });

    test(`'   {}   ' should return true`, () => {
        expect(hasMatchingBrackets('   {}   ')).toBe(true);
    });

    test(`'   }{   ' should return false`, () => {
        expect(hasMatchingBrackets('   }{   ')).toBe(false);
    });

    test(`'}' should return false`, () => {
        expect(hasMatchingBrackets('}')).toBe(false);
    });

    test(`'{' should return false`, () => {
        expect(hasMatchingBrackets('{')).toBe(false);
    });

    test(`['{}'] should return false`, () => {
        expect(hasMatchingBrackets(['{}'])).toBe(false);
    });
    
    test(`123 should return false`, () => {
        expect(hasMatchingBrackets(123)).toBe(false);
    });
    

})