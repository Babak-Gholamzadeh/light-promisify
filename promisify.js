module.exports = fn =>
    (...args) =>
        new Promise((resolve, reject) =>
            fn(...args, (err, ...rest) =>
                err && reject(err) || resolve(...rest)));
