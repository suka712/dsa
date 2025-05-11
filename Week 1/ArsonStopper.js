let grid = []
let numberOfTreeToCut = 0

for (let i = 0; i < 6; i++) {
    grid.push(readline().split('').map(spot => {return spot === 'o'? '=' : spot}))
}

for (let x = 0; x < 6; x++) {
    for (let y = 0; y < 6; y++) {
        if (grid[x][y] === '*') { // Identifies the spot burning
            // Burning upwards
            // Check if the coordinates to be burnt is out-of-bound
            // Then if it's a tree
            // If it is then cut it and increase the count by one

            // Upwards by one
            if (x - 1 >= 0 && x - 1 <= 6) {
                if (grid[x - 1][y] === '#') {
                    grid[x - 1][y] = 'X'
                    numberOfTreeToCut++
                }
            }

        }
    }
}

console.error(grid)

console.log('12');
