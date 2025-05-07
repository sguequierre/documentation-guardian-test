export function debounce(func: Function, delay: number): Function {
    let timeoutId: NodeJS.Timeout;
    
    return function(...args: any[]) {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
  
  export function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }