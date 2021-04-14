from collections import Counter

#this is if capitals count as a duplicates
def isUnique(string):
    """
    Implement an algorithm to determine if a string has all unique characters. What if you
    cannot use additional data structures? (Strings and Arrays)
    Cracking the coding interview pg 90 - 1.1
    """
    if len(set(string.lower())) == len(string):
        return True
    return False


def checkPerm(str1, str2):
    """
    Given two strings, write a method to decide if one is a permutation of the
    other.
    """
    if len(str1) != len(str2):
        return False
    
    #python sort O(n log n)
    #if caps matter use the to lower method
    if sorted(str1) == sorted(str2):
        return True

    return False 

def URLify(url):
    """
    Write a method to replace all spaces in a string with '%20: You may assume that the string
    has sufficient space at the end to hold the additional characters, and that you are given the "true"
    length of the string.

    params: url -> string
            output -> urlified url -> string
    """
    URLified = ""
    url = url.strip()
    for i in url: 
        if i == " ":
            i = '%20'
            URLified += i
        else: 
            URLified += i
    
    return URLified
 
def permPalidrome(string):
    """
    Given a string, write a function to check if it is a permutation of a palin-
    drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
    is a rea rrangement of letters. The palindrome does not need to be limited to just dictionary words.
    
    Cracking the coding interview 1.4 pg. 91 

    params : string -> str
             output -> boolean
    """
    newString = [i for i in string.lower() if i.isalnum() == True]
    countLetters = Counter(newString)

    #were allowed one odd number in a palimdrome
    odd = False

    if len(countLetters) == 1: 
        return True

    for i in countLetters: 
        if countLetters[i] % 2 != 0:
            if not odd: 
                odd = True
            else: 
                return False
    return True

def oneAway(str1 , str2):
    """
    There are three types of edits that can be performed on strings: insert a character,
    remove a character, or replace a character. Given two strings, write a function to check if they are
    one edit (or zero edits) away

    pale -> ple -> true
    pale -> bale -> true
    pale -> bales -> false

    params: 
    str1 -> string
    str2 -> string 

    output: 
    boolean 
    """
    
    if abs(len(str1) - len(str2)) > 1: 
        return False
    else: 
        if len(str1) > len(str2):
            return len(set(str1) - set(str2)) == 1
        else: 
            return len(set(str2) - set(str1)) == 1


print(oneAway("pake", "baake"))




