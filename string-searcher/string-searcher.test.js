import searchForSubSrt from './string-searcher';

var s = "Aula de web1";

test('search "web1" returns 8', () => {
    expect(searchForSubSrt(s, 'web1')).toBe(8);
});

test('search "web2" returns -1', () => {
    expect(searchForSubSrt(s, 'web2')).toBe(-1);
});

test('search "12" returns -1', () => {
    expect(searchForSubSrt(s, '12')).toBe(-1);
});

test('search "web1" returns -1', () => {
    expect(searchForSubSrt("Aula de weweb1", 'web1')).toBe(10);
});