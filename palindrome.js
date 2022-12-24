function checkPalindrome() {
    let word = document.getElementById("word").value;

    if (word.length < 11) {

        for (let i = 0; i < word.length / 2; i++) {
            if (word[i] === word[word.length - 1 - i]) {
                document.getElementById("comment").innerHTML = "It is a palindrome.";
            } else {
                document.getElementById("comment").innerHTML = "It is not a palindrome.";
            }
        }
    }
    else {
        return document.getElementById("comment").innerHTML = "Please enter a 10 charachter word.";
    }
}
