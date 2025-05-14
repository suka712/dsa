let registers = readline().split(' ').map(Number)
let instructionList = []

const numberOfInstruction = readline()

for (let i = 0; i < numberOfInstruction; i++) {
    const instruction = readline().split(' ')
    instructionList.push(instruction)
}

console.error(registers.join(' ')) // ERROR

for (let i = 0; i < numberOfInstruction; i++) {
    const command = instructionList[i][0] // Gets the command at the start of the instruction

    if (command === 'MOV') {
        handleMov(instructionList[i][1], instructionList[i][2])
    }
    else if (command === 'ADD') {
        handleAdd(instructionList[i][1], instructionList[i][2], instructionList[i][3])
    }
    else if (command === 'SUB') {
        handleSub(instructionList[i][1], instructionList[i][2], instructionList[i][3])
    }
    else if (command === 'JNE') {
        i =
    }

    console.error(instructionList[i]) // ERROR
    console.error(registers.join(' ')) // ERROR
}

function handleAdd(destination, firstValue, secondValue) {
    if (!isNaN(firstValue)) { firstValue = Number(firstValue) }
    if (!isNaN(secondValue)) { secondValue = Number(secondValue) }
    if (isNaN(firstValue)) {
        if (firstValue === 'a') { firstValue = registers[0] }
        else if (firstValue === 'b') { firstValue = registers[1] }
        else if (firstValue === 'c') { firstValue = registers[2] }
        else if (firstValue === 'd') { firstValue = registers[3] }
    }
    if (isNaN(secondValue)) {
        if (secondValue === 'a') { secondValue = registers[0] }
        else if (secondValue === 'b') { secondValue = registers[1] }
        else if (secondValue === 'c') { secondValue = registers[2] }
        else if (secondValue === 'd') { secondValue = registers[3] }
    }
    if (destination === 'a') { registers[0] = firstValue + secondValue }
    else if (destination === 'b') { registers[1] = firstValue + secondValue }
    else if (destination === 'c') { registers[2] = firstValue + secondValue }
    else if (destination === 'd') { registers[3] = firstValue + secondValue }
}

function handleSub(destination, firstValue, secondValue) {
    if (!isNaN(firstValue)) { firstValue = Number(firstValue) }
    if (!isNaN(secondValue)) { secondValue = Number(secondValue) }
    if (isNaN(firstValue)) {
        if (firstValue === 'a') { firstValue = registers[0] }
        else if (firstValue === 'b') { firstValue = registers[1] }
        else if (firstValue === 'c') { firstValue = registers[2] }
        else if (firstValue === 'd') { firstValue = registers[3] }
    }
    if (isNaN(secondValue)) {
        if (secondValue === 'a') { secondValue = registers[0] }
        else if (secondValue === 'b') { secondValue = registers[1] }
        else if (secondValue === 'c') { secondValue = registers[2] }
        else if (secondValue === 'd') { secondValue = registers[3] }
    }
    if (destination === 'a') { registers[0] = firstValue - secondValue }
    else if (destination === 'b') { registers[1] = firstValue - secondValue }
    else if (destination === 'c') { registers[2] = firstValue - secondValue }
    else if (destination === 'd') { registers[3] = firstValue - secondValue }
}

function handleMov(destination, value) {
    if (isNaN(value)) {
        if (value === 'a') { value = registers[0] }
        else if (value === 'b') { value = registers[1] }
        else if (value === 'c') { value = registers[2] }
        else if (value === 'd') { value = registers[3] }
    }
    if (destination === 'a') { registers[0] = value }
    else if (destination === 'b') { registers[1] = value }
    else if (destination === 'c') { registers[2] = value }
    else if (destination === 'd') { registers[3] = value }
}

console.log(registers.join(' '))
