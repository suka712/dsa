const recipe = readline().split(' ')

let image = ''

for (ingredient of recipe) {

    // Parsing one single ingredient
    // Either they're fully number, or isn't
    // If it isn't fully number (4z, 7e, 88sp)
    if (!isPureNumber(ingredient)) {
        let tempCount = 0
        let tempPrint = ''
        // Parsing one single character
        for (let character of ingredient) {
            // If the character is a number, add it to the count
            if (!isNaN(character)) {
                tempCount += character
            }
            else {
                tempPrint += character
            }
        }
        // Parsing the meaning of the ingredient
        if (tempPrint === 'sp') { tempPrint = ' ' }
        else if (tempPrint === 'bS') { tempPrint = '\\' }
        else if (tempPrint === 'sQ') { tempPrint = '\''}
        else if (tempPrint === 'nl') {
            tempPrint = '\n'
            tempCount = 1
        }

        image += tempPrint.repeat(tempCount)
    }
    // Little changes // Test
    else if (isPureNumber(ingredient)) {
        let tempCount = 0
        let tempPrint = ingredient

        tempPrint = ingredient % 10
        tempCount = (ingredient - tempPrint) / 10

        image += String(tempPrint).repeat(tempCount)
    }
}
console.log(image);

function isPureNumber(ingredient) {
    result = true

    for (character of ingredient) {
        if (isNaN(character)) { result = false }
    }

    return result
}