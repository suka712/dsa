let grid = []

for (let i = 0; i < 9; i++) {
    grid.push(readline().split(' ').map(Number))
}

console.log(hasValidRows(grid) && hasValidColumns(grid) && hasValidSubGrid(grid))

function hasValidRows(grid) {
    for (row of grid) {
        if (!isValid(row)) { return false }
    }
    return true
}

function hasValidColumns(grid) {
    for (let i = 0; i < 9; i++) {
        tempColumn = []
        for (row of grid) {
            tempColumn.push(row[i])
        }
        if (!isValid(tempColumn)) { return false }
    }
    return true
}

function hasValidSubGrid(grid) {
    let flattenedGrid = grid.flat()

    for (let gridStart = 0; gridStart <= 6; gridStart += 3) {
        let subGrid = []
        for (let base = 0; base < 3; base++) {
            subGrid.push(flattenedGrid[gridStart + base])
            subGrid.push(flattenedGrid[gridStart + base + 9])
            subGrid.push(flattenedGrid[gridStart + base + 18])
        }
        if (!isValid(subGrid)) { return false }
    }
    for (let gridStart = 27; gridStart <= 33; gridStart += 3) {
        let subGrid = []
        for (let base = 0; base < 3; base++) {
            subGrid.push(flattenedGrid[gridStart + base])
            subGrid.push(flattenedGrid[gridStart + base + 9])
            subGrid.push(flattenedGrid[gridStart + base + 18])
        }
        if (!isValid(subGrid)) { return false }
    }
    for (let gridStart = 54; gridStart <= 60; gridStart += 3) {
        let subGrid = []
        for (let base = 0; base < 3; base++) {
            subGrid.push(flattenedGrid[gridStart + base])
            subGrid.push(flattenedGrid[gridStart + base + 9])
            subGrid.push(flattenedGrid[gridStart + base + 18])
        }
        if (!isValid(subGrid)) { return false }
    }
    return true
}

function isValid(series) {
    const sortedSeries = [...series].sort((a, b) => a - b)
    for (let i = 0; i < 9; i++) {
        if (sortedSeries[i] !== i + 1) { return false }
    }
    return true
}

