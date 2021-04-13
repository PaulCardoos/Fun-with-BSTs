"""
Write a method to compute all permutations of a string of unique
characters.
"""

def perms(n):
    """
    n -> list 
    output -> all possible permuatations
    """

    res = []
    stack = []

    def dfs(i):
        if len(stack) == len(n):
            #can use a boolean array to check if we have already used index
            if len(set(stack.copy())) == 3: 
                res.append(stack.copy())
            return
        
        for i in range(len(n)):
            if(n[i]):
                stack.append(n[i])
                dfs(i + 1)
                stack.pop()
    dfs(0)
    return res
   

print(perms(["a","b","c"]))