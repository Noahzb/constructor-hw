var availableLetters, words, word, guess,
lives;
words = ["test", "tester", "testing", "tested"]
function setup() {
availableLetters = "abcdefghijklmnopqrstuvwxyz"
lives = 5;
score = 0;
};
var wordGenerator = function () {
word = words[Math.floor(Math.random() * words.length)].toLowerCase()
console.log("please type a word")
return word
// console won't leave time to input my answer
console.log(word)}
process.argv[0] = function (event) {
lives = 5;
score = 0;
var guess = process.argv[2].toLowerCase();
console.log(guess);
console.log(score);
console.log(lives);
if (guess === word) {
   score = score++
   console.log("wrong"+score);
}           if (guess != word) {
  lives=lives--
}      
}
//starts new round everytime, I do not want that to happen
wordGenerator()