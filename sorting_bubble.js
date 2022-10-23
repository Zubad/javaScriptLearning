var array = [5, 5, 3, 9, 9, 7, 3, 2, 1, 0, 5, 6, 7, 3, 5, 8, 9, 2] 
console.log("before sorting = ", array)

function aSorting(array){
    for ( var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            if(array[j] > array[j+1]){
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
    }
    return array;
}
function dSorting(array){
    for ( var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            if(array[j] < array[j+1]){
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
    }
    return array;
}

newArr = aSorting(array)
console.log('new array after sorting = ', newArr)

newDArr = dSorting(array)
console.log('new array after sorting = ', newDArr)