
// First initialize, upper and lowecase variables for the alphabet. Input validation?


const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



// const output = document.getElementById('output-area');
// const string = document.getElementById("input-area").value; 
// const amountToShift = document.getElementById("amountToShift").value;
// // const encodeBtn = document.getElementById("encode").value;
// // const decodeBtn = document.getElementById("decode").value;
// const encodeClick = document.getElementById("encode").addEventListener("click", cipher());

// document.getElementById("encode").addEventListener("click", cipher(string));




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
   

    // we then need to apply the shift to the currentIndex

    let indexShifted = (currentIndex + amountToShift) % 26  // lets say, we are at index 0(a), shifting by 5. it would be 0 + 5 / 26 = 0.19... (using the modulo operator gives us the remainder which can be used for the shift.) 

    if (indexShifted < 0){
        
     
        indexShifted = indexShifted + 26
        return indexShifted
    }
        




    return alphabet[indexShifted] // retrives the letter stores by the value of the indexShifted (phrasing?)

    }

    // function onClick (event) {
    //     const display = document.getElementById("output-area").value 
    //     if(encodeClick) {
    //         return cipher()
    //     }
        
    //     console.log(display)
    // }
    

    function cipher(string, amountToShift) {
       // document.getElementById("input").value;
        let userInput = string;
        let stringOfLetters = userInput.split("");
        let encodedPhrase = []
        for(let i = 0; i < userInput.length; i++) {
            encodedPhrase.push(letterRotation(stringOfLetters[i], amountToShift))
        }
        
        return encodedPhrase.join('')
        // let strEncoded = encodedPhrase.join('');
        
        // // console.log('This should hold the encoded string:', strEncoded)
        // document.getElementById("output-area").value = strEncoded;
        // console.log(strEncoded)
        }


function decode(string, amountToShift) {
            
            let stringOfLetters = string.split("");
            let decodedPhrase = []
            for(let i = 0; i < string.length; i++) {
                decodedPhrase.push(letterRotation(stringOfLetters[i], -amountToShift))
            }
            return decodedPhrase.join('')
            
            // let strDecoded = decodedPhrase.join('')
            // document.getElementById("output-area").value = strDecoded;
            // 
            // cipher.reverse(string)
        }; 



document.getElementById("encode").addEventListener('click', function () {
    const string = document.getElementById("input-area").value;
    const amountToShift = parseInt(document.getElementById("amountToShift").value)
        
        if(!isNaN(amountToShift)) {
            const encodedText = cipher(string, amountToShift)

            document.getElementById('output-area').value = encodedText

        }


        })

        

document.getElementById("decode").addEventListener('click', function() {
    const string = document.getElementById("input-area").value;
    const amountToShift = parseInt(document.getElementById("amountToShift").value)
        
        if(!isNaN(amountToShift)) {
            const decodedText = decode(string, amountToShift)
 
            document.getElementById('output-area').value = decodedText

        }


        })


// console.log(letterRotation('a', 5))
// console.log(letterRotation('z', 5))

// console.log(cipher('anywordhere', 5))
// console.log(decode('25mxvnqcgdqd', -5))


