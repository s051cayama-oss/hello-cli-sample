const assert = require("assert");
const { greet } = require("./greet");

assert.strictEqual(greet("Alice"), "Hello, Alice!");
assert.strictEqual(greet(), "Hello, world!");
assert.strictEqual(greet(""), "Hello, world!");

console.log("All tests passed.");
