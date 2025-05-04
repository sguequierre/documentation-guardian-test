/**
 * Utility functions for data processing
 * @module DataUtils
 */

/**
 * Formats a number as currency with the specified locale and currency
 * @param {number} amount - The amount to format
 * @param {string} [locale='en-US'] - The locale to use for formatting
 * @param {string} [currency='USD'] - The currency code
 * @returns {string} The formatted currency string
 */
function formatCurrency(amount, locale = 'en-US', currency = 'USD') {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }
  
  /**
   * Calculates the average of an array of numbers
   * @param {number[]} numbers - Array of numbers to average
   * @returns {number} The calculated average or 0 for empty arrays
   * @throws {TypeError} If any item in the array is not a number
   */
  function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return 0;
    }
    
    const sum = numbers.reduce((total, num) => {
      if (typeof num !== 'number') {
        throw new TypeError('All items must be numbers');
      }
      return total + num;
    }, 0);
    
    return sum / numbers.length;
  }
  
  module.exports = {
    formatCurrency,
    calculateAverage
  };