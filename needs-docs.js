function sortByProperty(array, property) {
    return [...array].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
  
  function filterByValue(array, key, value) {
    return array.filter(item => item[key] === value);
  }
  
  function groupByProperty(array, property) {
    return array.reduce((grouped, item) => {
      const key = item[property];
      grouped[key] = grouped[key] || [];
      grouped[key].push(item);
      return grouped;
    }, {});
  }
  
  module.exports = {
    sortByProperty,
    filterByValue,
    groupByProperty
  };