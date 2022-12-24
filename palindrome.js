<<<<<<< HEAD
// const word = document.getElementById("word").innerHTML;
// const yes = document.getElementById("yes");
// const no = document.getElementById("no");

// function checkPalindrome(word) {
//     for(let i = 0; i < (word.length) / 2; i++) {
//         if (word[i] === word[word.length - 1]) {
//             return yes.innerHTML("It is a palindrome.");
//         }
//             return no.innerHTML("It is a not palindrome.");
//     }
// }

const word = prompt("Enter a word: ");
const word_1 = (word.length) / 2;
const last_char = word.length - 1;

if (word.length < 11) {
    function checkPalindrome(word) {
        for(let i = 0; i < word_1; i++) {
            if (word[i] === word[last_char]) {
                return "It is a palindrome.";
            }
                return "It is a not palindrome.";
=======
const word = document.getElementById("word").value;
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const validaton = document.getElementById("validation");

function checkPalindrome(word) {
    if (word.length > 9) {
        for(let i = 0; i < (word.length) / 2; i++) {
        if (word[i] === word[word.length - 1]) {
            return yes.innerHTML("It is a palindrome.");
>>>>>>> aea9f063d35d3f2f8d76b17e22430f633660a6b2
        }
    }
<<<<<<< HEAD
    
const answer = checkPalindrome(word);
console.log(answer);

} else {
    console.log("Please Enter a word less than 10 charachters.");
=======
    }
    return validaton.innerHTML("Please Enter a 10 charachter word")
    
>>>>>>> aea9f063d35d3f2f8d76b17e22430f633660a6b2
}
