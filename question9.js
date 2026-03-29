let words = [
    {word: "apple", length:5},
    {word: "ball", length:5},
    {word: "grape", length:4},
    {word: "orange", length:6},
    {word: "kiwi", length:4}
];
for(i = 0; i < words.length; i++){
    if(words[i].word.length === words[i].length){
        console.log(words[i].word + ": Correct")
    }else {
        console.log(words[i].word + ":Wrong");
    }
}