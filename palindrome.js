const word = document.getElementById("word").value;
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const validaton = document.getElementById("validation");

function checkPalindrome(word) {
    if (word.length > 9) {
        for(let i = 0; i < (word.length) / 2; i++) {
        if (word[i] === word[word.length - 1]) {
            return yes.innerHTML("It is a palindrome.");
        }
            return no.innerHTML("It is a not palindrome.");
    }
    }
    return validaton.innerHTML("Please Enter a 10 charachter word")
    
}
