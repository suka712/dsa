/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const numberOfNumbers = parseInt(readline());
let sequence = []

for (let i = 0; i < numberOfNumbers; i++) {
    sequence.push(parseInt(readline()))
}

console.log(lengthOfLis(sequence))

function lengthOfLis(nums) {
    const sub = []

    for (let num of nums) { // for each number in the sequence
        let left = 0, right = sub.length; // left is set to 0, right is set to the length of the sequence

        // binary search
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (sub[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        sub[left] = num;
    }

    return sub.length;
}

