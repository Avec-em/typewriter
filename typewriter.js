const sentence = "I'm from the future";

let time = 0
let newSentence = sentence + '\n'
for (const char of newSentence) {
  setTimeout (() => 
    process.stdout.write(char), time);
  time += 50
};
