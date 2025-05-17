// const getStr = require('./mytest');
// const reverseString = require('./mytest');
const { getStr, reverseString, calculator, caesarCipher, analyzeArray } = require('./mytest');

test('word ->  Word', () => {
    expect(getStr('team')).toBe('Team');
});

test('word ->  Word 2', () => {
 expect(getStr('team')).not.toBe('team');
});

test('word ->  not word', () => {
 expect(reverseString('word')).not.toBe('word');
});

test('word ->  drow', () => {
 expect(reverseString('word')).toBe('drow');
});

test('super1Test ->  tseT1repus', () => {
    expect(reverseString('super1Test')).toBe('tseT1repus');
});

test('calculator.add 2 + 3 ->  5', () => {
    expect(calculator.add(2,3)).toBe(5);
});

test('calculator.subtract 3-2 ->  1', () => {
    expect(calculator.subtract(3,2)).toBe(1);
});

test('calculator.divide 6 / 3 ->  2', () => {
    expect(calculator.divide(6,3)).toBe(2);
});

test('calculator.multiply 3*3 ->  9', () => {
    expect(calculator.multiply(3,3)).toBe(9);
});

test('test #1 xyz,3-> abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('test #1A XZ,2 -> ZB', () => {
    expect(caesarCipher('XZ', 2)).toBe('ZB');
});

test('test #2 Case sensetive A -> D', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('test #3 test punctuation ', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});


test('test average ', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('test min ', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('test max ', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('test length ', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
