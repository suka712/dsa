const numberOfLines = parseInt(readline());

for (let i = 0; i < numberOfLines; i++) {
    const line = readline()
    console.log(minimumStacksNeeded(line))
}

function minimumStacksNeeded(lines) {
    const stacks = []

    for (let line of lines) {
        let placed = false
        // Try to place the container in an existing stack
        for (let i = 0; i < stacks.length; i++) {
            if (stacks[i] >= line) {
                stacks[i] = line // replace the top of the stack
                placed = true
                break;
            }
        }
        if (!placed) stacks.push(line) // If isn't placed
    }
    return stacks.length;
}
