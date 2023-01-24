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

    //Doesn't currently deal with taking pieces diagonally, promotion or en passant 
    getAvailableMoves(board) {
        let location = board.findPiece(this)

  
        //find whether there is a blocking piece in front of the current pawn.
        // console.log(location);
         let ourSquare = Square.at(4,3);
        // console.log(ourSquare);
        // console.log(board.getPiece(Square.at(4,3)));
        // console.log(Square.at(6,3));

        const moves = []
        
        if (this.player === Player.WHITE) {
            if (location.row === 1 && !this.checkForPiece(board,location.row+1,location.col) && !this.checkForPiece(board,location.row+2,location.col)) {
                moves.push(Square.at(location.row + 2, location.col))
            } 
            if (!this.checkForPiece(board,location.row+1,location.col)) {
                moves.push(Square.at(location.row + 1, location.col))
            } 
            //else {
            // moves.push("");
                    
            // }
            //below for if this.player === player.BLACK
            // do the same thing; add the blockingPiece;
        } 
        //our piece is at 6,3
        //blocking piece at 4,3
            else { 
                console.log("for the black pawn it's " + this.checkForPiece(board, location.row -2, location.col) + " that there is a piece at 4,3")
                console.log("for the black pawn it's " + this.checkForPiece(board, location.row -1, location.col) + " that there is a piece at 5,3")
            if (location.row === 6 && !this.checkForPiece(board,location.row -1, location.col) && !this.checkForPiece(board,location.row -2, location.col)) 
            {
                moves.push(Square.at(location.row - 2, location.col))
            } 
            if (!this.checkForPiece(board,location.row -1, location.col)) {
                moves.push(Square.at(location.row - 1, location.col))
            } 
            
         }
            
    
        return moves;
    }
}
