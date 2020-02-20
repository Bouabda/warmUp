//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:  array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
//              array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
//              array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false

function isSubset(arr1, arr2) {
    if (arr1.length > arr2.length) {
        for (var i = 0; i < arr2.length; i++) {
            if (arr1.includes(arr2[i]) === true) {
                return true
            }
            else return false;
        }
    }
    return false;
}