const valueToReach = parseInt(readline())

const numberOfCoinTypes = parseInt(readline())

let numberOfEachType = readline().split(' ').map(Number)
let valueOfEachType = readline().split(' ').map(Number)

let allCoins = []

for (let i = 0; i < numberOfCoinTypes; i++) {
    for (let j = 0; j < numberOfEachType[i]; j++) {
        allCoins.push(valueOfEachType[i])
    }
}

allCoins.sort((a, b) => a - b)

let valueReached = 0

for (let i = 0; i < allCoins.length; i++) {
    valueReached += allCoins[i]

    if (valueReached >= valueToReach) {
        console.log(i + 1)
    }
}

console.log(-1)
