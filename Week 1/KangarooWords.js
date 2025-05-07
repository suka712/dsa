// TODO: something's wrong

const numberOfSeries = parseInt(readline());

for (let i = 0; i < numberOfSeries; i++) {

    let joeyList = []
    let kangarooWord

    let words = readline().split(", ")

    for (let j = 0; j < words.length; j++) {

        for (let k = 0; k < words.length; k++) {

            if (j !== k && isJoey(words[k], words[j])) {
                kangarooWord = words[j]
                joeyList.push(words[k])
            }
        }
    }

    console.log(words)
    console.log(kangarooWord + ": " + joeyList.join(", "))
}

function isJoey(word, containerWord) {

    const letter = word.split('')
    const containerLetter = containerWord.split('')

    let i = 0;
    let j = 0;

    while (i < letter.length && j < containerLetter.length) {

        if (letter[i] === containerLetter[j]) {i++}
        j++
    }

    return i === letter.length
}
