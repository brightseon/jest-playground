export const fetchData = (callback) =>
    new Promise((resolve, reject) => {
        if (callback) {
            callback(null, 'peanut butter');
            // callback('error', null);
            return;
        }
        resolve('peanut butter');
        // reject('error');
    });
