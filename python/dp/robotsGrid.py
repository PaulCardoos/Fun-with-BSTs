"""
Imagine a robot sitting on the upper left corner of grid with r rows and c columns.
The robot can only move in two directions, right and down, but certain cells are "off limits" such that
the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to
the bottom right.
"""

#3 * 4 grid where 1 is a barrier and 0 is an open space
grid = [[0,0,0,0], [0,0,1,0], [1,0,0,0]]

def findPath(board): 
    