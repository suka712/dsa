const numberOfNumbers = parseInt(readline())

for (let i = 0; i < numberOfNumbers; i++) {
    const number = parseInt(readline())
    if (isGoodNumber(number)) { console.log("YES") }
    else {
        console.log("NO") 
        console.error(number) 
    }
}

function isGoodNumber(number) {
    for (let e = 1; e * e <= number; e++) {
        const divisor = 2 + (1 / e) + e
        const k = number / divisor

        if (Number.isInteger(k)) {
            const A = k - e
            if (A > 0) return true
        }
    }
    return false;
}

