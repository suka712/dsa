const numberOfSeries = parseInt(readline());

for (let i = 0; i < numberOfSeries; i++) {

    let joeyList = []
    let kangarooWord

    let words = readline().split(", ")

    for (let i = 0; i < words.length; i++) {

        for (let j = 0; j < words.length; j++) {

            if (i !== j && isJoey(words[j], words[i])) {
                kangarooWord = words[i]
                joeyList.push(words[j])
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
