//Create an array
//Create empty array to hold odd #s
//Create for loop to pick out odd #s from first array
//Push odd #s to odd array
//console.log
/*const numbers = [2, 4, 6, 8, 11, 20, 15, 22]
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    }
}

console.log(oddNumbers);*/


//VOWEL VS CONSONANT 
//Create an array of lowercase words
// print word with how many consonants and vowels it has
// a, e, i, o, u are vowels, everything else is a consonant



// const count = (sentence) => { 
     
//     let vow = 0; 
//     let cons = 0; 
     
//     for(let i = 0; i < sentence.length; i++){ 
//         let ele = sentence[i]; 
//         if(ele == 'a' || ele == 'e' || ele == 'i' || ele == 'o' || ele == 'u') 
//             vow += 1; 
//         else 
//             cons += 1; 
//     }; 
//     console.log(`${sentence}` +` ${vow} vowels are present `+`${cons} consonants are present.`); 
// }; 
 
// count("Hello"); 



//REVERSE ARRAY
//Create an array with numbers requested (1,2,3)
//Create for loop to populate the array in reverse (3,2,1)

/*const numbers = [ 1, 2 ,3]

for (let i= numbers.length; i >= 1 ; i--) {
    console.log(i);
}*/


//FIZZBUZZ

//Create a JavaScript code that prints each number from 1 to 100 on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.




for (let i = 1; i <= 100; i++){

if (i%5===0 && i%3===0){
    console.log("FizzBuzz");
}
else if(i%5===0){
    console.log("Buzz");
}
else if (i%3===0){
    console.log("Fizz");
}
 else {console.log(i)};
}
