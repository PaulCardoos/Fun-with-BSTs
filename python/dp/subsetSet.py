"""
Power Set: Write a method to return all subsets of a set.
Cracking the coding interview Section 8.4 Dynammic Programming
"""

def powerSet(nums):
    """
    this method takes set N and returns all possible subsets]
    params : input = N -> set, index -> integer
             output = set  
    """
    res = []
    subset = []

    def dfs(i):
        if i >= len(nums):
            res.append(subset.copy())
            return
        subset.append(nums[i])
        dfs(i + 1)

        subset.pop()
        dfs(i + 1)
    
    dfs(0)

    return res


print(sorted(powerSet(["a","b","c"])))

    

