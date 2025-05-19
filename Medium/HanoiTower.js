const pins = [
    [4, 3, 2, 1],
    [],
    []
]

function getLast(index) {
    return pins[index].slice(-1)[0]
}

function moveOneDisk(disk, from, to) {
    const moving = pins[from].pop()
    if (moving !== disk) { throw new Error() }
    if (getLast(to) && getLast(to) < disk) { throw new Error() }
    pins[to].push(moving)
}

function getTemp(from, to) {
    return [0, 1, 2].find(item => ![from, to].includes(item))
}

function moveStack(disk, from, to) {
    const temp = getTemp(from, to)
    if (disk > 1) { moveStack(disk - 1, from, temp)}
    moveOneDisk(disk, from, to)
    if (disk > 1) { moveStack(disk - 1, temp, to)}
}

console.log('before')
console.log(pins)

moveStack(4, 0, 2)

console.log('after')
console.log(pins)