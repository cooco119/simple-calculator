const assert = require('assert');
const Calculator = require('../src/calculator');

describe('One operation expression', () => {
    const calc = new Calculator();
    it('should calculate addition', () => {
        assert.equal(5, calc.eval('2 + 3'));
    });
    it('should calculate subtraction', () => {
        assert.equal(3, calc.eval('5 - 2'));
    });
    it('should calculate multiplication', () => {
        assert.equal(6, calc.eval('2 * 3'));
    });
    it('should calculate division', () => {
        assert.equal(2, calc.eval('6 / 3'));
    });
    it('should return NaN for division-by-zero', () => {
        assert.equal(NaN, calc.eval('10 / 0'));
    });
});

describe('Operation on existing result', () => {
    const calc = new Calculator();
    const precedenceExpression = '5 + 3';   // 8
    it('should overwrite existing result with full expression', () => {
        calc.eval(precedenceExpression);
        assert.notEqual(8, calc.eval('3 + 9'));
    })
    it('should work on addition', () => {
        calc.eval(precedenceExpression);
        assert.equal(10, calc.eval('+ 2'));
    });
    it('should work on multiplication', () => {
        calc.eval(precedenceExpression);
        assert.equal(16, calc.eval('* 2'));
    });
    it('should work on subtraction', () => {
        calc.eval(precedenceExpression);
        assert.equal(6, calc.eval('- 2'));
    });
    it('should work on division', () => {
        calc.eval(precedenceExpression);
        assert.equal(2, calc.eval('/ 4'));
    });
});

describe('Multi-operator expression', () => {
    const calc = new Calculator();
    it('should calculate multiplication first', () => {
        assert.equal(19, calc.eval('3 + 2 * 8'));
    });
    it('should calculate division first', () => {
        assert.equal(6, calc.eval('10 / 2 + 1'));
    });
    it('should calculate parenthesis first', () => {
        assert.equal(10, calc.eval('2 * (3 + 2)'));
    });
    it('should calculate multiple parentheses expression', () => {
        assert.equal(4, calc.eval('(4 + 2 * 10) / (2 + 12 / 3)'));
    });
});