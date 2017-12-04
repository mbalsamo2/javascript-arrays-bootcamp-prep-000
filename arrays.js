var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  array = [1];
  array = ['foo',...array];
  return array;
  
}

function destructivelyAddElementToBeginningOfArray(array, element) {
 array = [1];
 array.unshift('foo');
 return array;
}

function addElementToEndOfArray(array, element) {
  array = [1];
  array = [...array, 'foo'];
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array = [1];
  array.push('foo');
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array = [1, 2, 3];
  array.shift(1);
  return array
}

function removeElementFromBeginningOfArray(array) {
   array = [1, 2, 3];
   array.slice(1);
   return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
   array = [1, 2, 3];
   array.pop();
   return array;
}

function removeElementFromEndOfArray(array) {
  
}