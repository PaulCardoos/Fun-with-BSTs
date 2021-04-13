import unittest 
from tripleStep import tripleStep


class TestTripleStep(unittest.TestCase):
    def test_tripleStep(self):
        self.assertEqual(tripleStep(6), 13)
        self.assertEqual(tripleStep(4), 5)
        self.assertEqual(tripleStep(1), 1)
        self.assertEqual(tripleStep(2), 2)
        self.assertEqual(tripleStep(-4), "number should be positive")

if __name__ == "__main__":
    unittest.main()
