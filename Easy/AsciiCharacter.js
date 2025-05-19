/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const width = parseInt(readline())
const height = parseInt(readline())
const textToPrint = readline().toUpperCase()
let rows = []
for (let i = 0; i < height; i++) {
    rows.push(readline())
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'
// construct ascii print row by row
// for the height of the print
for (let i = 0; i < height; i++) {
    // for each word's first row
    let rowToPrint = ''
    for (let x = 0; x < textToPrint.length; x++) {
        // take the index of the character within the alphabet
        let indexOfChar = alphabet.indexOf(textToPrint[x])
        if (indexOfChar === -1) { indexOfChar = 26 }
        // slice the thing from the super alphabet and add it to the row to print
        rowToPrint += rows[i].slice(indexOfChar * width, (indexOfChar + 1) * width)
    }
    // print each row
    console.log(rowToPrint)
}

