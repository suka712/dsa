# this is an attempt at implementing binary search 
# this file still exist on the feature branch
# hello from feature
import math

numbers = [15, 28 , 66, 4, 3, 77, 2, 12, 1]

print('before sorting:', numbers)

numbers.sort()

print('after sorting:', numbers)

def binarySearch(target, array):
    upperIndex = len(array) - 1
    lowerIndex = 0
    while (lowerIndex <= upperIndex):
        midIndex = math.floor((upperIndex + lowerIndex) / 2)
        if (array[midIndex] == target): 
            return midIndex
        elif (numbers[midIndex] > target): upperIndex = midIndex - 1
        elif (numbers[midIndex] < target): lowerIndex = midIndex + 1
    return -1

toSearchFor = 3

print(binarySearch(toSearchFor, numbers))
