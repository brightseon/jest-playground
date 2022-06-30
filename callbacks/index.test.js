import { fetchData } from './fetchData';

test('the data is peanut butter', () => {
    function callback(error, data) {
        if (error) throw error;
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
});

test('the data is peanut butter', (done) => {
    function callback(error, data) {
        if (error) {
            done(error);
            return;
        }

        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});

test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
});
