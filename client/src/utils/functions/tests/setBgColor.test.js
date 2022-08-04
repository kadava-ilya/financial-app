import {setBgColor} from "../setBgColor";

describe('setBgColor func', function () {
    it('should return green background when set positive number', function () {
        expect(setBgColor(1)).toMatchObject({backgroundColor: '#aff792', color: '#227a1d'})
    });
    it('should return red background when set negative number', function () {
        expect(setBgColor(-1)).toMatchObject({backgroundColor: '#fa6e8a', color: '#b30435'})
    });
    it('should return gray background when set 0', function () {
        expect(setBgColor(0)).toMatchObject({backgroundColor: '#edebeb'})
    });
    it('should return gray background when set null', function () {
        expect(setBgColor(null)).toMatchObject({backgroundColor: '#edebeb'})
    });
    it('should return gray background when set undefined', function () {
        expect(setBgColor(undefined)).toMatchObject({backgroundColor: '#edebeb'})
    });
    it('should return gray background when set string', function () {
        expect(setBgColor('test')).toMatchObject({backgroundColor: '#edebeb'})
    });
})