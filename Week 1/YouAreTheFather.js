// TODO failing many cases
function isMatch(childPairs, motherPairs, fatherPairs) {
    for (let i = 0; i < childPairs.length; i++) {
        let c1 = childPairs[i][0]
        let c2 = childPairs[i][1]

        let m1 = motherPairs[i][0]
        let m2 = motherPairs[i][1]

        let f1 = fatherPairs[i][0]
        let f2 = fatherPairs[i][1]

        const condition1 = (c1 === m1 || c1 === m2 && c2 === f1 || c2 === f2)

        const condition2 = (c1 === f1 || c1 === f2 && c2 === m1 || c2 === m2)

        if (!condition1 && !condition2) {
            return false
        }
    }
    return true
}


const motherPairs = readline().split(':  ')[1].trim().split(' ').map(genePair => genePair.split(''))
const childPairs = readline().split(':  ')[1].trim().split(' ').map(genePair => genePair.split(''))
let fatherName = ''

const numOfPossibleFathers = parseInt(readline());
for (let i = 0; i < numOfPossibleFathers; i++) {
    const possibleFatherInput = readline()
    const possibleFatherName = possibleFatherInput.split(':  ')[0]
    const possibleFatherPairs = possibleFatherInput.split(':  ')[1].trim().split(' ').map(genePair => genePair.split(''))

    if (isMatch(childPairs, motherPairs, possibleFatherPairs)) {
        fatherName = possibleFatherName
    }
}

console.log(fatherName + ', you are the father!')



