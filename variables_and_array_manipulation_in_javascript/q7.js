var name = 'ZUBAD';
var array = []

nameArray = name.split('')

var newName = []
for (let i =4; i >= 0; i--){
    newName.push(nameArray[i]);
}

newName = newName.join('');
console.log(newName)