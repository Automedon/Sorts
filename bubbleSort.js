//Main function
let arr=[5,1,-5,100,0,-410,1];
function bubbleSort(array){
    const arr=array.slice();
    for (let i=0; i<arr.length;i++){
        for (let j=0; j<arr.length;j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(arr));//[-410, -5, 0, -0, 1, 1, 5, 100]
