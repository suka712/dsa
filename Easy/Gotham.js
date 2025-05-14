class Suspect {
    constructor(name, location, peopleWith) {
        this.name = name
        this.location = location
        this.peopleWith = peopleWith
        this.isVerified = false
    }
}

const numberOfSuspects = parseInt(readline())
let suspectList = []

for (let i = 0; i < numberOfSuspects; i++) {
    const line = readline().trim()
    const name = line.split(':')[0]
    console.error(name)

    const sentence = line.split(':')[1].join(':').trim()
    const location = sentence.split(' ')[4]

    let peopleWith = []

    if (sentence.includes('alone')) {
        peopleWith = []
    } else {
        const withIndex = sentence.indexOf('with')
        const namesPart = sentence.slice(withIndex + 5).replace('.', '').trim()
        peopleWith = namesPart.split(' and ')
    }

    suspectList.push(new Suspect(name, location, peopleWith))

}

const suspectMap = new Map()
for (const suspect of suspectList) {
    suspectMap.set(suspect.name, suspect)
}

for (const suspect of suspectList) {
    if (suspect.peopleWith.length === 0) {
        suspect.isVerified = true
        continue
    }

    let verifiedCount = 0

    for (const friend of suspect.peopleWith) {
        const friendSuspect = suspectMap.get(friend)
        if (
            friendSuspect &&
            friendSuspect.peopleWith.includes(suspect.name) &&
            friendSuspect.location === suspect.location
        ) {
            verifiedCount++
        }
    }

    if (verifiedCount === suspect.peopleWith.length) {
        suspect.isVerified = true
    }
}

for (const suspect of suspectList) {
    console.error(suspect) // ERROR CHECKING

}

for (let suspect of suspectList) {
    if (suspect.isVerified === false) {
        console.log(suspect.name[0].toUpperCase() + suspect.name.slice(1) + ' did it!')
        return
    }
}

console.log('It was me!')
