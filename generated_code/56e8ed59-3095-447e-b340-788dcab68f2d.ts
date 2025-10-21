
/**
 * Advanced Sorting Utilities
 * Multiple sorting algorithms with performance optimization
 */
export class SortingUtilities {
  
  /**
   * Quick sort implementation - O(n log n) average case
   */
  quickSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
    if (arr.length <= 1) return [...arr];
    
    const compare = compareFn || ((a, b) => a > b ? 1 : a < b ? -1 : 0);
    const result = [...arr];
    
    this.quickSortInPlace(result, 0, result.length - 1, compare);
    return result;
  }
  
  private quickSortInPlace<T>(arr: T[], low: number, high: number, compare: (a: T, b: T) => number): void {
    if (low < high) {
      const pi = this.partition(arr, low, high, compare);
      this.quickSortInPlace(arr, low, pi - 1, compare);
      this.quickSortInPlace(arr, pi + 1, high, compare);
    }
  }
  
  private partition<T>(arr: T[], low: number, high: number, compare: (a: T, b: T) => number): number {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      if (compare(arr[j], pivot) <= 0) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
  
  /**
   * Merge sort implementation - O(n log n) guaranteed
   */
  mergeSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
    if (arr.length <= 1) return [...arr];
    
    const compare = compareFn || ((a, b) => a > b ? 1 : a < b ? -1 : 0);
    const mid = Math.floor(arr.length / 2);
    const left = this.mergeSort(arr.slice(0, mid), compare);
    const right = this.mergeSort(arr.slice(mid), compare);
    
    return this.merge(left, right, compare);
  }
  
  private merge<T>(left: T[], right: T[], compare: (a: T, b: T) => number): T[] {
    const result: T[] = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
      if (compare(left[i], right[j]) <= 0) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}