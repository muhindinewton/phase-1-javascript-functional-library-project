// myEach
function myEach(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Iterate over each element in the array and apply the callback
      collection.forEach(callback);
    } else {
      // If collection is an object, iterate over each value and apply the callback
      Object.values(collection).forEach(callback);
    }
    return collection; // Return the original collection
  }
  
  // myMap
  function myMap(collection, callback) {
    let result = [];
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Create a new array with values based on the callback function
      result = collection.map(callback);
    } else {
      // For objects, create a new array from the values based on the callback function
      result = Object.values(collection).map(callback);
    }
    return result; // Return the new array
  }
  
  // myReduce
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue;
    
    // Handle case where no initial value is provided
    if (accumulator === undefined) {
        if (Array.isArray(collection) && collection.length > 0) {
            accumulator = collection[0];
            collection = collection.slice(1);
        } else if (Object.values(collection).length > 0) {
            const values = Object.values(collection);
            accumulator = values[0];
            collection = Object.fromEntries(Object.entries(collection).slice(1));
        } else {
            throw new TypeError('Reduce of empty array with no initial value');
        }
    }
    
    // Handle arrays directly
    if (Array.isArray(collection)) {
        return collection.reduce(callback, accumulator);
    }
    
    // Handle objects by reducing their values
    return Object.values(collection).reduce(callback, accumulator);
}
  
  
  // myFind
  function myFind(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Find the first element in the array that satisfies the callback condition
      return collection.find(callback);
    } else {
      // For objects, find the first value that satisfies the callback condition
      return Object.values(collection).find(callback);
    }
  }
  
  // myFilter
  function myFilter(collection, callback) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Filter the array based on the callback condition
      return collection.filter(callback);
    } else {
      // For objects, filter the values based on the callback condition
      return Object.values(collection).filter(callback);
    }
  }
  
  // mySize
  function mySize(collection) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // Return the length of the array
      return collection.length;
    } else {
      // For objects, return the number of keys
      return Object.keys(collection).length;
    }
  }
  
  // myFirst
  function myFirst(collection, n = 1) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // If n is 1, return the first element, else return the first n elements
      return n === 1 ? collection[0] : collection.slice(0, n);
    }
    // If collection is an object, return the first n keys as an array
    return n === 1 ? Object.keys(collection)[0] : Object.keys(collection).slice(0, n);
  }
  
  // myLast
  function myLast(collection, n = 1) {
    // Check if the collection is an array
    if (Array.isArray(collection)) {
      // If n is 1, return the last element, else return the last n elements
      return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
    }
    // If collection is an object, return the last n keys as an array
    return n === 1 ? Object.keys(collection)[Object.keys(collection).length - 1] : Object.keys(collection).slice(-n);
  }
  
  // myKeys
  function myKeys(collection) {
    // If the collection is an object, return its keys
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      return Object.keys(collection);
    }
    return []; // Return an empty array for non-object collections
  }
  
  // myValues
  function myValues(collection) {
    // If the collection is an object, return its values
    if (typeof collection === 'object' && !Array.isArray(collection)) {
      return Object.values(collection);
    }
    return []; // Return an empty array for non-object collections
  }
  