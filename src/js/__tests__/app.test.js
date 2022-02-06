import sortArr from '../app';

test('getting information about the characters health', () => {
    const input = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 }
    ];
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'мечник', health: 10 }
    ];
    const received = sortArr(input);
    expect(received).toEqual(expected);
});

test('getting information about the characters health', () => {
    const input = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 }
    ];
    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 }
    ];
    const received = sortArr(input);
    expect(received).toEqual(expected);
});

test('getting information about the characters health', () => {
    const input = [
        { name: 'маг', health: 80 },
        { name: 'лучник', health: 80 }
    ];
    const expected = [
        { name: 'маг', health: 80 },
        { name: 'лучник', health: 80 }
    ];
    const received = sortArr(input);
    expect(received).toEqual(expected);
});