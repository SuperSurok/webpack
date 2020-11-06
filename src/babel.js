const start = async () => await Promise.resolve('async working')


start().then(console.log)

// const unused = 32;

class Util {
    static id = Date.now();
}

console.log('Util id: ',Util.id);

import ('lodash').then(_ => {
    console.log('Lodash', _.random(0, 42, true));
})