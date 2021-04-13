"""
A magic index in an array A [e ... n -1] is defined to be an index such that A[ i] =
i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in
array A. Problem 8.3 CRacking the coding interview (Dynammic Programming)
"""


arr1 = [-2,-1,0,2,4,7,10,11,19]
arr2 = [-1,0,1,2,3,5]
arr3 = [-1,0,2,4,8,9,11]


#Brute force solution is straight forward
def magicIndex(n):
    for i in range(len(n)):
        if n[i] == i:
            return i

    return "magic number does not exist" 

#optimized solution 
def magicIndexOptimized(n, start, end):
    """
    params: array
    end : integer val (representing index in array)
    start : int value (representing starting index in array)
    
    if the array is sorted and we know the middle 
    element we can decide which side we need to search.
    Thus cutting the amount of operations in half
    """ 

    if(end < start):
        return -1

    mid = (end + start) // 2

    if(n[mid] == mid):
        return mid
    elif(n[mid] > mid):
        return magicIndexOptimized(n, start, mid - 1)
    else: 
        return magicIndexOptimized(n, mid + 1, end)
    
    

     
# answer1 = magicIndex(arr1)
# answer2 = magicIndex(arr2)
# answer3 = magicIndex(arr3)

answer1 = magicIndexOptimized(arr1, 0, len(arr1) - 1)
answer2 = magicIndexOptimized(arr2, 0, len(arr2) - 1)
answer3 = magicIndexOptimized(arr3, 0, len(arr3) - 1)

print(answer1)
print(answer2)
print(answer3)
