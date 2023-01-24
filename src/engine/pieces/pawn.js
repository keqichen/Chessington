import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Board from '../board';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }
    
    checkForPiece (board, row,col){
        if (board.getPiece(Square.at(row,col)) === undefined) {
            return false;
        } 
        return true;   
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)

        const moves = []
        
        if (this.player === Player.WHITE) {
            if (location.row === 1 && !this.checkForPiece(board,location.row+1,location.col) && !this.checkForPiece(board,location.row+2,location.col)) {
                moves.push(Square.at(location.row + 2, location.col))
            } 
            if (location.row !== 7 && !this.checkForPiece(board,location.row+1,location.col)) {
                moves.push(Square.at(location.row + 1, location.col))
            } 
                    
            //below for if this.player === player.BLACK
        } 
            else { 
            if (location.row === 6 && !this.checkForPiece(board,location.row -1, location.col) && !this.checkForPiece(board,location.row -2, location.col)) 
            {
                moves.push(Square.at(location.row - 2, location.col))
            } 
            if (location.row !== 0 && !this.checkForPiece(board,location.row -1, location.col)) {
                moves.push(Square.at(location.row - 1, location.col))
            } 
            
         }

        return moves;
    }
}
