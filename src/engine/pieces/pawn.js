import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    //Doesn't currently deal with taking pieces diagonally, promotion or en passant 
    getAvailableMoves(board) {
        let location = board.findPiece(this)

        //find whether there is a blocking piece in front of the current pawn.
        let blockingPiece = board.findPiece(location.row+1,location.col);
        let blockingPieceBlack = board.findPiece(location.row -1, location.col)
      
        
        //moves holds an array of all possible coordinates the piece can move to - which are pushed from below. For pieces this array will be longer
        //for loops would be better to generate all possible moves
        // deal with all possible moving first? Or think about how a 'checkMove' function might stop pieces from going to taken squares (or not moving beyond them)!
        const moves = []
        if (this.player === Player.WHITE) {
            if (location.row === 1 && blockingPiece==null) {
                moves.push(Square.at(location.row + 2, location.col))
            } else if (location.row === 1 && blockingPiece==null){
             //this and the two lines above have identical conditions;
             //we also need to deal with the situation where a pawn on row === 1 is blocked by a piece two steps in front; 
             //as these are else ifs, they will only add a single move. But from row===1, the pawn should usually have two possible moves added

                moves.push("");
            } else if (location.row !== 1 && blockingPiece==null){
                moves.push(Square.at(location.row + 1, location.col))
            } else {
                moves.push("");
            }
            
            //below for if this.player === player.BLACK
            // do the same thing; add the blockingPiece;
        } else {
            if (location.row === 6 && blockingPiece==null) {
                moves.push(Square.at(location.row - 2, location.col))
            } else if (location.row === 6 && blockingPiece==null){
                moves.push("");
            } else if (location.row !== 6 && blockingPiece==null){
                moves.push(Square.at(location.row - 1, location.col))
            } else {
                moves.push("");
            }
            
        }
        return moves;
    }
}
