var name = ['Azam', 'Anas', 'Saif', 'Sir'];

function search(array, key){
    for(let i = 0; i < array.length; i++){
        if(array[i] == key){
            return console.log(array[i], i)
        }   
    }
    return console.log('not availabel')
}

search(name, "Saif");