

var array = ['Nameed', 'Usama', 'Rizwan', 'Husnain', 'Ali', 'Zubad']
/*
for(let i = 0; i < array.length; i++){
    if(array[i] == 'Usama'){
        console.log(array[i], ' is on the i = ', i)
    }
}
*/
function linearSearch(array, key){
    for(let i = 0; i < array.length; i++){
        if(array[i] == key){
            return i;
        }
    }
    return -1
}
var one = linearSearch(array, 'Usama');
var two = linearSearch(array, 'Zubad');
var three = linearSearch(array, 'Muhammad');

console.log('the i = ', one)
console.log('the i = ', two)
console.log('the i = ', three)