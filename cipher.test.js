 import { cipher, letterRotation, decode } from './cipher.js'



// describe('Cipher', () => {
//     let cipher;

//     beforeEach(() => {
//         document.body.innerHTML = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Caesar Cipher</title>
//             <link href="./dist/output.css" rel="stylesheet">
//             <link rel="stylesheet" href="cipher.css">
//             <script src="https://cdn.tailwindcss.com"></script>
//         </head>
//         <body class="font-mono bg-gray-200 text-4xl ">
//             <div class="text-center">
//                 <h1 class="text-6xl mt-5">Ceaser Cipher</h1>
//                 <h2 class="mt-5">Encode and Decode Secret Messages</h2>
//             </div>
//             <section>
//                 <form>
//                     <div class="flex flex-col justify-center items-center mx-auto my-10">
//                         <label><textarea id="input-area" class="h-48 w-30 mx-auto rounded-md" type="text"></textarea></label>
//                         <input type="text" class="rounded-md w-16 text-md p-2" required>
//                         <div class="flex mt-5 gap-16">
//                             <button id="encode" class=" border border-2 border-black rounded-[12px] p-4">Encode</button>
//                             <button id="decode" class=" border border-2 border-black rounded-[12px] p-4">Decode</button>
//                         </div>
//                         <label><textarea id="output-area" class="h-48 w-30 mx-auto rounded-md mt-5" type="text"></textarea></label>
//                     </div>
        
//                 </form>
//             </section>
        
            
//         </body>
        
//         <script src="cipher.js"></script>
//         </html>
//         `
//     })

//     test('OnEncode CLick Should encode word', () => {
//         const mockClickEvent = {currentTarget: document.getElementById('encode')}
//         chessGame.onSquareClick(mockClickEvent);
//     })

//     test('Encode CLick should update on the HTML', () => {
//         const mockClickEvent = {currentTarget: document.getElementById('encode')}
//         cipher.cipher('helloworld', 5)

    
//     })
// })

// hello = khoor

// describe('Cipher Shift ', () => {

//     test('Shift input amount should move by three', () => {
//         const result = cipher("hello", 3);
//         expect(result).toBe("khoor");
//       });
// })


// From ChatGPT

// const { letterRotation, cipher, decode } = require('./cipher'); 

// Test letterRotation function
test('letterRotation - Shift within alphabet range', () => {
  expect(letterRotation('a', 5)).toBe('f');
});

test('letterRotation - Shift beyond alphabet range', () => {
  expect(letterRotation('z', 5)).toBe('e');
});

test('letterRotation - Non-alphabetic character', () => {
  expect(letterRotation('1', 5)).toBe('1');
});

// Test cipher function
test('cipher - Basic encoding', () => {
  expect(cipher('hello', 3)).toBe('khoor');
});

test('cipher - Encoding with spaces and punctuation', () => {
  expect(cipher('hello world!', 3)).toBe('khoor zruog!');
});

// Test decode function
test('decode - Basic decoding', () => {
  expect(decode('khoor', 3)).toBe('hello');
});

test('decode - Decoding with spaces and punctuation', () => {
  expect(decode('khoor zruog!', 3)).toBe('hello world!');
});
