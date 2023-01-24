import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';



export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    checkForPiece (board,row,col){
        if (board.getPiece(Square.at(row,col)) === undefined) {
            return false;
        } 
        return true;   
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        const moves = []

        //four directions

        //moving forward
        for (let i = location.row + 1; i < 8; i++) {

             // If there is a piece on that square, do not add any squares beyond that (in that direction)
            moves.push(Square.at(i, location.col));
            if (this.checkForPiece(board, i, location.col)) {
                break;
            }
        }
        //moving backward
        for (let i = location.row - 1; i >= 0; i--) {
            moves.push(Square.at(i, location.col));
            if (this.checkForPiece(board, i, location.col)) {
                break;
            }
        }
        //moving left
        for (let i = location.col - 1; i >= 0; i--) {
            moves.push(Square.at(location.row, i));
            if (this.checkForPiece(board, location.row, i)) break;

        }
        //moving right
        for (let i = location.col + 1; i < 8; i++) {
            moves.push(Square.at(location.row, i));
            if (this.checkForPiece(board, location.row, i)) break;

        }

        return moves;
    }
}


