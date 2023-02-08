function getComputerChoice(){
    var words = ['Rock', 'Paper', 'Scissors'];
    var word = words[Math.floor(Math.random() * words.length)];
    return word;
}

console.log(getComputerChoice())