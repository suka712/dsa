const numberOfHorses = parseInt(readline())

let horses = []
let smallestDifference = Number.MAX_SAFE_INTEGER

for (let i = 0; i < numberOfHorses; i++) {
    horses.push(readline())
}

horses.sort((a, b) => a - b)

for (let i = 0; i < numberOfHorses; i++) {
    if (Math.abs(horses[i] - horses[i + 1]) < smallestDifference) {
        smallestDifference = Math.abs(horses[i] - horses[i + 1])
    }
}

console.log(smallestDifference)