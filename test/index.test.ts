import { sum } from '../src/index'

beforeEach(() => {
    console.log('beforeEach')
});

afterEach(() => {
    console.log('afterEach')
});

beforeAll(() => {
    console.log('beforeAll')
});

afterAll(() => {
    console.log('afterAll')
});

test('sum number', () => {
    expect(sum(2, 3)).toBe(5)
})

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);    // It isn't! Because rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

describe('', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];
    
    test('the shopping list has beer on it', () => {
        expect(shoppingList).toContain('beer');
    });
    
    function compileAndroidCode() {
        throw new Error('you are using the wrong JDK');
    }
    
    test('compiling android goes as expected', () => {
        expect(compileAndroidCode).toThrow();
        expect(compileAndroidCode).toThrow(Error);
    
        // You can also use the exact error message or a regexp
        expect(compileAndroidCode).toThrow('you are using the wrong JDK');
        expect(compileAndroidCode).toThrow(/JDK/);
    });
})
