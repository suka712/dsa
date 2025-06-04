let numberTable = new Array(20).fill('', 0, 20)

const widthAndHeight = readline().split(' ').map(Number)
const width = widthAndHeight[0]
const height = widthAndHeight[1]

for (let i = 0; i < height; i++) {
    const input = readline()
    for (let k = 0; k < 20; k++) {
        numberTable[k] += input.slice(k * width, (k + 1) * width)
    }
}

console.error(numberTable) // LOG number table

// Take in s1 as string
let s1 = ''
const lineCountOfS1 = readline()
for (let i = 0; i < lineCountOfS1; i++) {
    s1 += readline()
}
console.error(s1)
// Take in s2 as string
let s2 = ''
const lineCountOfS2 = readline()
for (let i = 0; i < lineCountOfS2; i++) {
    s2 += readline()
}
console.error(s2)
// Parse s1 for base 20
let n1 = []
for (let i = 0; i < s1.length; i += width * height) {
    n1.push(numberTable.indexOf(s1.slice(i, i + width * height)))
}
// Parse s2 for base 20
let n2 = []
for (let i = 0; i < s2.length; i += width * height) {
    n2.push(numberTable.indexOf(s2.slice(i, i + width * height)))
}
console.error(n1) // LOG base 20 array
console.error(n2) // LOG base 20 array

const operation = readline()
let result = 0
let d1 = toDecimal(n1) // decimal
let d2 = toDecimal(n2) // decimal

// do calculation in decimal
if (operation === '+') {
    result = d1 + d2
}
else if (operation === '-') {
    result = d1 - d2
}
else if (operation === '/') {
    result = d1 / d2
}
else { result = d1 * d2 }
// convert result to base 20
let resultInBase20 = toBase20(result)
// print result in base 20
for (digit of resultInBase20) {
    printBase20(digit, height, width)
}
// ----Helpers----
function printBase20(decimal, numberHeight, numberWidth) {
    const inString = numberTable[decimal]
    let tempWidth = 0
    for (let i = 0; i < numberHeight; i++) {
        let line = inString.slice(tempWidth * numberWidth, (tempWidth + 1) * numberWidth)
        tempWidth++
        console.log(line)
    }
}

function toDecimal(base20) {
    return base20.reduce((sum, digit, i) => sum + digit * 20 ** (base20.length - 1 - i), 0)
}

function toBase20(decimal) {
    if (decimal === 0) return [0]
    let digits = []
    while(decimal > 0) {
        let remainder = decimal % 20
        digits.unshift(remainder)
        decimal = Math.floor(decimal / 20)
    }
    return digits
}