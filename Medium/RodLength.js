/**
 *  * Auto-generated code below aims at helping you parse
  * the standard input according to the problem statement.
   **/

const rodLength = parseInt(readline());
const numberOfPipes = parseInt(readline());
let pieces = []
for (let i = 0; i < numberOfPipes; i++) {
    let inputs = readline().split(' ');
    let length = parseInt(inputs[0])
    let value = parseInt(inputs[1])
    pieces.push([length, value])
}

for (const [pieceLength, pieceValue] of pieces) {
    console.error('piece of length', pieceLength, 'has value', pieceValue) // LOG
}

let bestValues = new Array(rodLength + 1).fill(0)

for (let i = 1; i <= rodLength; i++) {
    for (let [pieceLength, pieceValue] of pieces) {
        if (pieceLength <= i) {
            bestValues[i] = Math.max(bestValues[i], bestValues[i - pieceLength] + pieceValue)
        }
    }
}

console.error(bestValues)

console.log(bestValues[rodLength])