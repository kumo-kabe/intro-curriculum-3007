'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}

const assert = require('assert');
assert.equal(trib(0), 0, `トリボナッチ数列の0番目は0ですが、実際は${trib(0)}でした`);
assert.equal(trib(1), 0, `トリボナッチ数列の1番目は0ですが、実際は${trib(1)}でした`);
assert.equal(trib(2), 1, `トリボナッチ数列の2番目は1ですが、実際は${trib(2)}でした`);
assert.equal(trib(10), 81, `トリボナッチ数列の10番目は81ですが、実際は${trib(10)}でした`);