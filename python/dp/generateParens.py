def generateParens(n):
    """
    return a list of strings
    only add closing parenthesis if closed < open 
    valid if and only iff open == closed == n
    """

    stack = []
    res = []

    def backtrack(openCount, closedCount): 
        if openCount == closedCount == n: 
            res.append("".join(stack))
            return
        
        if openCount < n: 
            stack.append("(")
            backtrack(openCount + 1, closedCount)
            stack.pop()

        if closedCount < openCount: 
            stack.append(")")
            backtrack(openCount, closedCount + 1)
            stack.pop()

    backtrack(0, 0)

    return res


print(generateParens(5))