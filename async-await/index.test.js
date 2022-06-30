import { fetchData } from '../fetchData';

test('the data is peanut butter', async () => {
    const data = await fetchData();

    expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);

    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', async () => {
    await expect(fetchData()).rejects.toBe('error');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);

    return fetchData().catch((e) => expect(e).toMatch('error'));
});
