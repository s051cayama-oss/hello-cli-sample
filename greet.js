function greet(name) {
  return `Hello, ${name || "world"}!`;
}

if (require.main === module) {
  const name = process.argv[2];
  console.log(greet(name));
}

module.exports = { greet };
