
// First initialize, upper and lowecase variables for the alphabet. Input validation?


const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const inputArea = document.getElementById("inputArea").value;




function letterRotation(letter, amountToShift) {
    let alphabet // Stores the values alphabet string, if uppercase or lowercase. 

    if (alphabetUpper.includes(letter)) { // check to see which alphabet to use based on capitalization. 
        alphabet = alphabetUpper;
    } else if (alphabetLower.includes(letter)) {
        alphabet = alphabetLower;
    } else {
        return letter // returns the character if it is not in alphabetUpper or alphabetLower. 
    }


    

    // function has to identify the current index of the letter variable in the alphabet.

    let currentIndex = alphabet.indexOf(letter); 
    console.log(currentIndex)

    // we then need to apply the shift to the currentIndex

    let indexShifted = (currentIndex + amountToShift) % 26  // lets say, we are at index 0(a), shifting by 5. it would be 0 + 5 / 26 = 0.19... (using the modulo operator gives us the remainder which can be used for the shift.) 

    if (indexShifted < 0){
        
     
        indexShifted = indexShifted + 26
        return indexShifted
    }
        
    console.log(indexShifted)



    return alphabet[indexShifted] // retrives the letter stores by the value of the indexShifted (phrasing?)

    }



    function cipher(string, amountToShift) {
       // document.getElementById("input").value;
        let stringOfLetters = string.split("");
        let encodedPhrase = []
        for(let i = 0; i < string.length; i++) {
            encodedPhrase.push(letterRotation(stringOfLetters[i], amountToShift))
        }
        
        return encodedPhrase.join('')
        
        }


        function decode(string, amountToShift) {
        
            let stringOfLetters = string.split("");
            let decodedPhrase = []
            for(let i = 0; i < string.length; i++) {
                decodedPhrase.push(letterRotation(stringOfLetters[i], -amountToShift))
            }
            
            return decodedPhrase.join('')
            // 
            // cipher.reverse(string)
        }; 

console.log(letterRotation('a', 5))
console.log(letterRotation('z', 5))

console.log(cipher('anywordhere', 5))
console.log(decode('25mxvnqcgdqd', -5))




// // Loop over each letter in the string, find that letter in the alphabet array and push the index of each letter
// // in a new array

// // Loop over the new array and add the input amount to each element in the array

// // Loop over the new array, return 



// console.log(alphabet.indexOf("a"))


// // Get an array of letters from the alphabet. 
// // We want take an input. Split the input into individual letters. 

// // 

// function toArr(letter, amountToShift) {
// // splits into words
//     // let newArrOfWords = s.split(" ");
//     // let empty_arr = []
//     // console.log(newArrOfWords)
//     // for(let i = 0; i < newArrOfWords.length; i++) {
//     //     // splits into letters

        
//         //let arr = []

//         let letterPosition = alphabet.indexOf(letter)

//         let new_position = (letterPosition + amountToShift) /

//         console.log(letterPosition)


    
 

// }

// function cipher(phrase) {
//     for (let i = 0; i < phrase.length; i++) {
//         let arrayOfIndexes = []
//         arrayOfIndexes.push(alphabet.forEach((phrase) => console.log(phras)))
//         console.log(arrayOfIndexes)
//         return arrayOfIndexes
//     }
// }

// cipher("")