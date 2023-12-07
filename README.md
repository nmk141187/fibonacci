
## How to Run

1. **Clone the Repository:**
   - Clone this repository to your local machine or download repository to your local.

3. **Navigate to the Directory:**
   - Open a terminal and navigate to the directory where `fib.js` is located.

4. **Run the Application:**
   - Execute the following command, replacing `10` with the desired position in the Fibonacci series:
     ```bash
     node fib.js 10
     ```
   - Ensure that the argument provided is a non-negative integer.

## Explanation

- The `fib.js` file contains a recursive function for calculating Fibonacci numbers with memoization to improve performance.
- The `memo` object stores previously computed values to avoid redundant calculations.
- The `runApplication` function reads the position from the command line, checks its validity, and calculates the corresponding Fibonacci value.
- If the input is invalid, an error message is displayed.

## Performance Note

While recursion with memoization improves performance, it's essential to note that for extremely large Fibonacci numbers, a more efficient algorithm (such as matrix exponentiation) might be required to prevent stack overflow issues.

Feel free to explore and modify the code as needed. If you encounter any issues or have suggestions for improvement, please don't hesitate to contribute or reach out.

Enjoy exploring the Fibonacci sequence with this simple Node.js application!