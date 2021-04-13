"""
Given an innnite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and
pennies (1 cent), write code to calculate the number of ways of representing n cents.
"""

class changeMaker: 
    def __init__(self, coins):
        """
        coins -> list
        """
        self.coins = coins

    def changeCombinations(self, cents):
        """
        function to calculate how many possible ways to create cents
        given the list of coins
        """
        changeCombos = [0] * 100
        changeCombos[0] = 1

        for i in self.coins:
            for j in range(len(changeCombos)): 
                if cents >= j: 
                    changeCombos[j] += changeCombos[j - i]

        return changeCombos[cents - 1]


if __name__ == "__main__":
    change = changeMaker([1,5,10,25])
    ch = change.changeCombinations(12)
    print(ch)