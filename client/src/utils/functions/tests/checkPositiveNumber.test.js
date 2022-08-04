import {checkPositiveNumber} from "../checkPositiveNumber";

describe('checkPositiveNumber func', function () {
    it('should return positive number', function () {
        expect(checkPositiveNumber(5)).toEqual('+5')
    });
    it('should return negative value', function () {
        expect(checkPositiveNumber(-2)).toEqual(-2)
    });
    it('should return 0', function () {
        expect(checkPositiveNumber(undefined)).toEqual(0)
    });
    it('should return 0', function () {
        expect(checkPositiveNumber(null)).toEqual(0)
    });
})