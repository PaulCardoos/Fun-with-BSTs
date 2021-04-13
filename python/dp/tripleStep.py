import unittest

#cracking the coding interview
#pg 134 dynamic programming

#top down approach
def tripleStep(n):
    if n < 0: 
        return "number should be positive" 
    if n == 0: 
        return 0
    if n == 1: 
        return 1
    if n == 2: 
        return 2
    
    #uses memoization 
    steps = [0] * n
    steps[0] = 1
    steps[1] = 2

    #start at 2 because we already know one
    for i in range(2, n):
        steps[i] = steps[i - 1] + steps[i - 2]
    
    return steps[n - 1]

print(tripleStep(6))

