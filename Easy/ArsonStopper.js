// This is a comment from the bug-fix branch
// This is another bug fix
// This is also another bug fix
let grid = []
let treeToCutCount = 0

// This is a comment from the feature branch
// This comment should only exist on the feature branch

for (let i = 0; i < 6; i++) {
    grid.push(readline().split('').map(spot => {return spot === 'o'? '=' : spot}))
}
let hasFire = false
for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
        if (grid[x][y] === '*') {
            hasFire = true
        }
    }
}

if(!hasFire) {
    console.log('RELAX')
    return
}

for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
        if (grid[x][y] === '*') { // Identifies the spot burning
            // Burning upwards
            // Check if the coordinates to be burnt is out-of-bound
            // Then if it's a tree
            // If it is then cut it and increase the count by one
            // UPWARDS TWICE
            if (x - 1 >= 0 && x - 1 < 6) {
                if (grid[x - 1][y] === '#') {
                    grid[x - 1][y] = 'X'
                    treeToCutCount++
                }
            }
            if (x - 2 >= 0 && x - 2 < 6) {
                if (grid[x - 2][y] === '#') {
                    grid[x - 2][y] = 'X'
                    treeToCutCount++
                }
            }
            // DOWNWARDS TWICE
            if (x + 1 >= 0 && x + 1 < 6) {
                if (grid[x + 1][y] === '#') {
                    grid[x + 1][y] = 'X'
                    treeToCutCount++
                }
            }
            if (x + 2 >= 0 && x + 2 < 6) {
                if (grid[x + 2][y] === '#') {
                    grid[x + 2][y] = 'X'
                    treeToCutCount++
                }
            }
            // LEFTWARDS TWICE
            if (y - 1 >= 0 && y - 1 < 6) {
                if (grid[x][y - 1] === '#') {
                    grid[x][y - 1] = 'X'
                    treeToCutCount++
                }
            }
            if (y - 2 >= 0 && y - 2 < 6) {
                if (grid[x][y - 2] === '#') {
                    grid[x][y - 2] = 'X'
                    treeToCutCount++
                }
            }
            // RIGHTWARDS TWICE
            if (y + 1 >= 0 && y + 1 < 6) {
                if (grid[x][y + 1] === '#') {
                    grid[x][y + 1] = 'X'
                    treeToCutCount++
                }
            }
            if (y + 2 >= 0 && y + 2 < 6) {
                if (grid[x][y + 2] === '#') {
                    grid[x][y + 2] = 'X'
                    treeToCutCount++
                }
            }
            // SINGLE DIAGONAL, 4 in total
            if (y - 1 >= 0 && y - 1 < 6 && x - 1 >= 0 && x - 1 < 6) {
                if (grid[x - 1][y - 1] === '#') {
                    grid[x - 1][y - 1] = 'X'
                    treeToCutCount++
                }
            }
            if (y + 1 >= 0 && y + 1 < 6 && x + 1 >= 0 && x + 1 < 6) {
                if (grid[x + 1][y + 1] === '#') {
                    grid[x + 1][y + 1] = 'X'
                    treeToCutCount++
                }
            }
            if (y + 1 >= 0 && y + 1 < 6 && x - 1 >= 0 && x - 1 < 6) {
                if (grid[x - 1][y + 1] === '#') {
                    grid[x - 1][y + 1] = 'X'
                    treeToCutCount++
                }
            }
            if (y - 1 >= 0 && y - 1 < 6 && x + 1 >= 0 && x + 1 < 6) {
                if (grid[x + 1][y - 1] === '#') {
                    grid[x + 1][y - 1] = 'X'
                    treeToCutCount++
                }
            }
            // TWO DIAGONAL, 4 in total
            if (y - 2 >= 0 && y - 2 < 6 && x - 2 >= 0 && x - 2 < 6) {
                if (grid[x - 2][y - 2] === '#') {
                    grid[x - 2][y - 2] = 'X' // Directly diagonal
                    treeToCutCount++
                }
                if (grid[x - 2][y - 1] === '#') {
                    grid[x - 2][y - 1] = 'X'
                    treeToCutCount++
                }
                if (grid[x - 1][y - 2] === '#') {
                    grid[x - 1][y - 2] = 'X'
                    treeToCutCount++ // Checks out
                }
            }
            if (y + 2 >= 0 && y + 2 < 6 && x + 2 >= 0 && x + 2 < 6) {
                if (grid[x + 2][y + 2] === '#') {
                    grid[x + 2][y + 2] = 'X' // Directly diagonal
                    treeToCutCount++
                }
                if (grid[x + 2][y + 1] === '#') {
                    grid[x + 2][y + 1] = 'X'
                    treeToCutCount++
                }
                if (grid[x + 1][y + 2] === '#') {
                    grid[x + 1][y + 2] = 'X'
                    treeToCutCount++ // Checks out
                }
            }
            if (y - 2 >= 0 && y - 2 < 6 && x + 2 >= 0 && x + 2 < 6) {
                if (grid[x + 2][y - 2] === '#') {
                    grid[x + 2][y - 2] = 'X' // Directly diagonal
                    treeToCutCount++
                }
                if (grid[x + 2][y - 1] === '#') {
                    grid[x + 2][y - 1] = 'X'
                    treeToCutCount++
                }
                if (grid[x + 1][y - 2] === '#') {
                    grid[x + 1][y - 2] = 'X'
                    treeToCutCount++ // y- x+ checks out
                }
            }
            if (y + 2 >= 0 && y + 2 < 6 && x - 2 >= 0 && x - 2 < 6) {
                if (grid[x - 2][y + 2] === '#') {
                    grid[x - 2][y + 2] = 'X' // Directly diagonal
                    treeToCutCount++
                }
                if (grid[x - 2][y + 1] === '#') {
                    grid[x - 2][y + 1] = 'X'
                    treeToCutCount++
                }
                if (grid[x - 1][y + 2] === '#') {
                    grid[x - 1][y + 2] = 'X'
                    treeToCutCount++
                }
            }
        }
    }
}

let treesSavedCount = 0
for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
        if (grid[x][y] === '#') {
            treesSavedCount++
        }
    }
}

console.error(grid)
if (treeToCutCount === 0 || treesSavedCount < 6) {
    console.log('JUST RUN')
    return
}
console.log(treeToCutCount);