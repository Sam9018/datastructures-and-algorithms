'use strict';

const reverseArr = require('../array_reverse');

describe('reverseArr', () => {
    test('when array has even number of things inside of it', () => {
        const evenAmmountArr = [1,2,3,4];
        expect(reverseArr(evenAmmountArr)).toEqual([4,3,2,1]);
    });
});

describe('reverseArr', () => {
    test('when array has a odd number of things inside of it', () => {
        const oddAmmountArr = [1,2,3,4,5];
        expect(reverseArr(oddAmmountArr)).toEqual([5,4,3,2,1]);
    });
});
