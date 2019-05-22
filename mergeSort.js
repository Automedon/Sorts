//dummy arr;
let arr=[5,1,-5,100,0,-410,1];
//Main function
function mergeSort(array) {
    if (array.length === 1) return array;
    let left = array.slice(0, array.length / 2);
    let right = array.slice(array.length / 2 );
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}
// Helper
function merge(left, right) {
    let arr = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] > right[0]) {
            arr.push(right[0]);
            right.shift()
        } else {
            arr.push(left[0]);
            left.shift();
        }
    }
    while (left.length) {
        arr.push(left[0]);
        left.shift();
    }
    while (right.length) {
        arr.push(right[0]);
        right.shift();
    }
    return arr
}
console.log(mergeSort(arr));//[-410, -5, 0, -0, 1, 1, 5, 100]
