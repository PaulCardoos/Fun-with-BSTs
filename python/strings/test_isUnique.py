import unittest
from stringFunctions import *

class TestIsUnique(unittest.TestCase):
    def test_isUnique(self):
        self.assertEqual(isUnique('Paul'), True)
        self.assertEqual(isUnique('Cardoos'), False)
        self.assertEqual(isUnique('Luke'), True)
        self.assertEqual(isUnique('Rafca'), False)
        self.assertEqual(isUnique('Alan'), False)
        self.assertEqual(isUnique('Miriam'), False)
        self.assertEqual(isUnique('aaaaa'), False)
        self.assertEqual(isUnique('1232344'), False)
        self.assertEqual(isUnique('12345'), True)
        self.assertEqual(isUnique('hip'), True)
    def test_checkPerm(self):
        self.assertEqual(checkPerm('hip', 'pih'), True)
        self.assertEqual(checkPerm('aaa', 'paaih'), False)
        self.assertEqual(checkPerm('paul', 'luap'), True)
        self.assertEqual(checkPerm('Alan', 'lana'), False)
        self.assertEqual(checkPerm('johnson', 'sonjohn'), True)
        self.assertEqual(checkPerm('aaa', 'bbb'), False)
        self.assertEqual(checkPerm('jimmy', 'ymmij'), True)
    def test_URLify(self):
        self.assertEqual(URLify('I love you'), "I%20love%20you")
        self.assertEqual(URLify('  I l ove you '), "I%20l%20ove%20you")
        self.assertEqual(URLify(' I love you     '), "I%20love%20you")
    def test_permPalindrome(self):
        self.assertEqual(permPalidrome('carrace'), True)
        self.assertEqual(permPalidrome('carracse'), False)
        self.assertEqual(permPalidrome('taco cat'), True)
        self.assertEqual(permPalidrome('AtCo act'), True)
        self.assertEqual(permPalidrome('smellems'), True)
        self.assertEqual(permPalidrome('smelllems'), True)
        self.assertEqual(permPalidrome('smelllzems'), False)
    def test_oneAway(self):
        self.assertEqual(oneAway('pake', 'bake'), True)
        self.assertEqual(oneAway('pale', 'ple'), True)
        self.assertEqual(oneAway('pale', 'bale'), True)
        self.assertEqual(oneAway('pales', 'pale'), True)
        self.assertEqual(oneAway('pale', 'bake'), False)
        self.assertEqual(oneAway('paaak', 'bak'), False)
        self.assertEqual(oneAway('pake', 'baake'), False)
        self.assertEqual(oneAway('paa', 'pa'), True)

if __name__ == "__main__":
    unittest.main()
