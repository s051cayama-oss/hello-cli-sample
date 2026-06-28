const HANDS = ["グー", "チョキ", "パー"];

function judge(playerHand, computerHand) {
  if (playerHand === computerHand) return "draw";

  const beats = {
    グー: "チョキ",
    チョキ: "パー",
    パー: "グー",
  };

  return beats[playerHand] === computerHand ? "win" : "lose";
}

function play(playerHand, randomFn = Math.random) {
  if (!HANDS.includes(playerHand)) {
    throw new Error(`不正な手です: ${playerHand}`);
  }

  const computerHand = HANDS[Math.floor(randomFn() * HANDS.length)];
  const result = judge(playerHand, computerHand);

  return { playerHand, computerHand, result };
}

if (require.main === module) {
  const playerHand = process.argv[2];
  const { computerHand, result } = play(playerHand);

  console.log(`あなた: ${playerHand} / コンピュータ: ${computerHand}`);
  console.log(
    result === "win" ? "あなたの勝ち！" : result === "lose" ? "あなたの負け..." : "あいこ"
  );
}

module.exports = { HANDS, judge, play };
