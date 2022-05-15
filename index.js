// 1. Please write a function that shows the usage of closures

const sayHello = () => {
  const message = 'Hello, ';

  return returnName = (name) => {
    return message + name + '!';
  }

}

const result = sayHello();
console.log(result('World'));

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const arraySum = [9, 1, 22, 0, 2].reduce((a, b) => a + b, 0)
console.log(arraySum);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flattenArray = [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]

function flatten(array) {
  const flat = [];

  array.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

console.log(flatten(flattenArray));

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const commonItems = ['b', 3, 4, 76, 'c'].filter(value => ['a', 'b', 4, 76, 21, 'e'].includes(value))
console.log(commonItems);

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const u1 = ['b', 3, 4, 76, 'c'].filter(value => !['a', 'b', 4, 76, 21, 'e'].includes(value))
const u2 = ['a', 'b', 4, 76, 21, 'e'].filter(value => !['b', 3, 4, 76, 'c'].includes(value))
const differentItems = u1.concat(u2)
console.log(differentItems);

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]


const tupleArray = [1,2,3].map((value, index) => [value, [4,5,6,7][index]]);

console.log(tupleArray)

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const get = (obj, path) => {

	let current = obj;

	for (let i = 0; i < path.length; i++) {

		if (!current[path[i]]) return undefined;

		current = current[path[i]];

	}

	return current;
};

console.log(get({ a: { b: { c: { d: '23' } } } }, ['a', 'b', 'c', 'd']))

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const compareObjs = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
        return false;
        }
    }
    return true;
}

console.log(compareObjs({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }));
console.log(compareObjs({ a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }));
// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const arrayAndObj = (array, obj) => {
    const diffObj = {}
     for(const element in obj){
        if (!array.includes(element)) {
            diffObj[element] = obj[element]
        }
    };
    return diffObj;
}


console.log(arrayAndObj(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }));