const assert = require("assert");
const { judge, play } = require("./janken");

assert.strictEqual(judge("グー", "チョキ"), "win");
assert.strictEqual(judge("グー", "パー"), "lose");
assert.strictEqual(judge("グー", "グー"), "draw");
assert.strictEqual(judge("チョキ", "パー"), "win");
assert.strictEqual(judge("パー", "グー"), "win");

const winResult = play("グー", () => 0.5); // チョキを選ばせる
assert.strictEqual(winResult.computerHand, "チョキ");
assert.strictEqual(winResult.result, "win");

assert.throws(() => play("不正な手"));

console.log("All tests passed.");
