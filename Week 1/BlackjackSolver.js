const bankCards = readline().split(" ")
const playerCards = readline().split(" ")

let bankScore = calculateScore(bankCards)
let playerScore = calculateScore(playerCards)

let bankHasBlackjack = hasBlackjack(bankCards)
let playerHasBlackjack = hasBlackjack(playerCards)

if (playerHasBlackjack && !bankHasBlackjack) console.log('Blackjack!')
else if (playerScore > 21) console.log('Bank')
else if (bankScore > 21) console.log('Player')
else if (playerScore < bankScore) console.log('Bank')
else if (playerScore > bankScore) console.log('Player')
else console.log('Draw');

function calculateScore(cards) {

    let totalScore = 0
    let aceCount = 0

    for (let card of cards) {

        if (!isNaN(card)) {
            totalScore += parseInt(card)
        }
        else if (card === "J" || card === "Q" || card === "K") {
            totalScore += 10
        }
        else if (card === "A") {
            totalScore += 11
            aceCount++
        }
        while (totalScore > 21 && aceCount > 0) {
            totalScore -= 10
            aceCount--
        }
    }

    return totalScore
}

function hasBlackjack(cards) {

    if (cards.length !== 2) {
        return false
    }

    return (cards.includes("A") && (cards.includes("10") || cards.includes("J") || cards.includes("Q") || cards.includes("K")))
}