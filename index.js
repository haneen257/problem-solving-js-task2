// write function that take 2 params
// first paramter is string of one word 
// second paramter is a character 
// calculate the number of char that apper in the string

function countChar(str , char) {
    let count = 0 ;
    
    for(let i =0 ; i <str.length; i++){
        if(str[i] == char){
            count++
        }
    }
    console.log(count);

}
countChar("haneen","e")