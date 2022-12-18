const word = document.getElementById("word").innerHTML;
const yes = document.getElementById("yes");
const no = document.getElementById("no");

function checkPalindrome(word) {
    for(let i = 0; i < (word.length) / 2; i++) {
        if (word[i] === word[word.length - 1]) {
            return yes.innerHTML("It is a palindrome.");
        }
            return no.innerHTML("It is a not palindrome.");
    }
}
