const text = readline()
const depth = parseInt(readline()) // number of words to start iteration
const length = parseInt(readline()) // Length of the sentence to generate
const seed = readline() // The starting words

const words = text.split(' ') // Get all the words from the text
const markov = new Map() // For storage

// Build the chain
// The loop's stop condition find the appropriate length to check, not iterate through the entire thing
for (let i = 0; i <= words.length - depth - 1; i++) { // the stop condition accounts for the fact that shit will be out of bound
    const key = words.slice(i, i + depth).join(' ') // The key is the word extracted by depth
    const nextWord = words[i + depth] // This is to find the next of the key
    if (!markov.has(key)) { // Check if the map has the key, if not, set the new key along with an empty array
        markov.set(key, [])
    }
    markov.get(key).push(nextWord) // Get the key (unique), push the possible nextWord into it
}

// Random number generation function provided
// Pick a random word of length 2 from the text
let random_seed = 0;
function pick_option_index(num_of_options) {
    random_seed += 7
    return random_seed % num_of_options
}

// Step 3: Generate output text
const output = seed.split(' ')

while (output.length < length) { // goes until the output is at the requested length
    const key = output.slice(output.length - depth).join(' ') // Get the current key - 2 in this case
    const options = markov.get(key) // Get all the options for the key
    if (!options) break // If there isn't any options, break

    const choice = pick_option_index(options.length) // Generate a random int of choice
    output.push(options[choice]) // Append to the output
}

console.log(output.join(' ')) // Join everything together for printing
