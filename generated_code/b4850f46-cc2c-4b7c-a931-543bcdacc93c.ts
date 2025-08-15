
/**
 * Fibonacci Number Calculator
 * Efficient implementation with memoization
 */
export class FibonacciCalculator {
  private cache: Map<number, number> = new Map();
  
  /**
   * Calculate fibonacci number efficiently with memoization
   */
  fibonacci(n: number): number {
    if (n < 0) {
      throw new Error('Fibonacci is not defined for negative numbers');
    }
    
    if (n <= 1) return n;
    
    // Check cache first
    if (this.cache.has(n)) {
      return this.cache.get(n)!;
    }
    
    // Calculate and cache result
    const result = this.fibonacci(n - 1) + this.fibonacci(n - 2);
    this.cache.set(n, result);
    
    return result;
  }
  
  /**
   * Generate fibonacci sequence up to n terms
   */
  fibonacciSequence(n: number): number[] {
    if (n <= 0) return [];
    
    const sequence: number[] = [];
    for (let i = 0; i < n; i++) {
      sequence.push(this.fibonacci(i));
    }
    
    return sequence;
  }
  
  /**
   * Check if a number is in fibonacci sequence
   */
  isFibonacci(num: number): boolean {
    if (num < 0) return false;
    
    let a = 0, b = 1;
    if (num === a || num === b) return true;
    
    let c = a + b;
    while (c <= num) {
      if (c === num) return true;
      a = b;
      b = c;
      c = a + b;
    }
    
    return false;
  }
}