function checkPalindrome(word) {
    for (i = word[0]; i < word.length; i++) {
        for (j = word[word.length - 1]; j < word.length; j--) {
            if (word[i] === word[j]) {
                console.log("It is a palindrome.");
            }
            else {
                console.log("It is not a palindrome.")
                
            }
        }
    }
}