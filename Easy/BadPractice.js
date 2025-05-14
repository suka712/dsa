const width = parseInt(readline());
const height = parseInt(readline());
const input = readline().trim().split(' ').map(Number)

const totalPixels = width * height
let pixels = []

let currentColor = '*' // Doesn't hard code to swap later on
let index = 0;

for (let runLength of input) {
    for (let i = 0; i < runLength; i++) {
        if (index >= totalPixels) break
        pixels.push(currentColor)
        index++
    }
    currentColor = currentColor === '*' ? ' ' : '*' // If current color is '*' then switch to ' ', vice versa
}

while (pixels.length < totalPixels) {
    pixels.push(' ')
}

for (let row = 0; row < height; row++) {
    const rowPixels = pixels.slice(row * width, (row + 1) * width) // Index at the start and end of row
    console.log('|' + rowPixels.join('') + '|') // Cool
}