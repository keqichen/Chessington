import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';
import King from './king';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    checkForPiece(board, row, col) {
        if (board.getPiece(Square.at(row, col)) === undefined) {
            return false
        } else {
            return true
        }

    }


    canPieceBeTaken(board, row, col) {
        //this should be optimised to handle cases where there is no piece inputted i.e. the square is empty
        let opposingKing = new King(Player.WHITE)
        let pieceToCheck = board.getPiece(Square.at(row, col));
        if (pieceToCheck.player == this.player || pieceToCheck instanceof King) {
            return false };
        return true;

    }

    //Can we simplify these for loops into just one or two loops?
    //We need to remove the square that the bishop is on. We can copy the way I did this with the rook; or we can look for this built-in function that franc used

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        // four directions
        // Track 

        //our piece at (4,4)
        //blocking piece at (6,6)
        //we can't move to (7,7)

        let x = location.row;
        let y = location.col;

        let forwardRightBlocked = false;
        let forwardLeftBlocked = false;
        let backwardRightBlocked = false;
        let backwardLeftBlocked = false;

        // we can only get 9 moves
        for (let i = 1; i < 8; i++) {
            //forward right
            if (x + i < 8 && y + i < 8 && !forwardRightBlocked) {
                moves.push(Square.at(x + i, y + i));
                if (this.checkForPiece(board, x + i, y + i)) {
                    forwardRightBlocked = true;
                    if (!this.canPieceBeTaken(board, x + i, y + i)) {
                        moves.pop();
                    }
                }
            }
            //forward left; off-by-one error befoe: should be equal to or less than for 0 values as the '0'th index is a legit square
            if (x + i < 8 && y - i < 8 && y - i >= 0) {
                moves.push(Square.at(x + i, y - i));
                if (this.checkForPiece(board, x + i, y - i)) forwardLeftBlocked = true;
            }
            //backward right
            if (x - i >= 0 && x - i < 8 && y + i < 8) {
                moves.push(Square.at(x - i, y + i));
                if (this.checkForPiece(board, x - i, y + i)) backwardRightBlocked = true;
            }
            //backward left
            if (x - i >= 0 && y - i < 8 && y - i >= 0) {
                moves.push(Square.at(x - i, y - i));
                if (this.checkForPiece(board, x - i, y - i)) backwardLeftBlocked = true;
            }
        }

        return moves
    }
}
