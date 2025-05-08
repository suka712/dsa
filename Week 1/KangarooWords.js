const numberOfSeries = parseInt(readline())
let results = []

for (let i = 0; i < numberOfSeries; i++) {

    const words = readline().split(", ").sort()
    const resultTemplates = []

    for (let a = 0; a < words.length; a++) {

        const kangarooWord = words[a]
        const joeysList = []

        for (let b = 0; b < words.length; b++) {

            if (a !== b && isJoey(words[b], kangarooWord)) {
                joeysList.push(words[b])
            }
        }
// contributing
        if (joeysList.length > 0) {
            joeysList.sort()
            resultTemplates.push(kangarooWord + ": " + joeysList.join(", "))
        }
    }

    for (const resultTemplate of resultTemplates) {
        results.push(resultTemplate)
    }
}

if (results.length > 0) {
    results.sort()
    for (const result of results) { console.log(result) }
}
else {
    console.log("NONE")
}

function isJoey(joey, kangaroo) {
    let i = 0

    for (let j = 0; j < kangaroo.length; j++) {
        if (joey[i] === kangaroo[j]) {i++}
    }

    return i === joey.length
}
