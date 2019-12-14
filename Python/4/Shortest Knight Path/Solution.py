import numpy as np
import collections

def knight(p1, p2):
    columns = "abcdefgh"
    rows = "87654321"
    start_x = rows.index(p1[1]) 
    start_y = columns.index(p1[0])
    goal_x = rows.index(p2[1])
    goal_y = columns.index(p2[0])
    length = 0

    knight_moves = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]]

    chess_board = np.full((8, 8), -1)

    move_queue = collections.deque()
    move_queue.appendleft([start_x, start_y, length])

    # Breadth first search to find the length of the shortest path to the goal
    while chess_board[goal_x, goal_y] == -1:
        this_x, this_y, this_length = move_queue.pop()
        chess_board[this_x, this_y] = this_length
        for move in knight_moves:
            next_x = this_x + move[0]
            next_y = this_y + move[1]
            if 0 <= next_x < 8 and 0 <= next_y < 8 and chess_board[next_x, next_y] == -1:
                move_queue.appendleft([next_x, next_y, this_length + 1])
    return chess_board[goal_x, goal_y]
