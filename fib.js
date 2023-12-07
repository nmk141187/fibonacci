const memo = {};

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

function runApplication() {
  const position = parseInt(process.argv[2]);

  if (isNaN(position) || position < 0) {
    console.log("Please provide a non-negative integer position in the Fibonacci series.");
    process.exit(1);
  }

  const result = fibonacci(position);
  console.log(`Fibonacci value at position ${position}: ${result}`);
}

runApplication();