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
        console.log(location);
        let ourSquare = Square.at(4,3);
        console.log(ourSquare);
        console.log(board.getPiece(Square.at(4,3)));
        console.log(Square.at(6,3));

        let testBlockerPiece = board.getPiece(Square.at(0,1));
        if (typeof testBlockerPiece == "undefined") console.log("We have got testBlockerPiece's undefined status")

        //tr with getPiece instead; using this.board to enter coordinates?
        let blockingPieceOne = board.getPiece(Square.at(location.row+1,location.col));
        let blockingPieceTwo = board.getPiece(Square.at(location.row+2,location.col));
        let blockingPieceBlackOne = board.getPiece(Square.at(location.row -1, location.col));
        let blockingPieceBlackTwo = board.getPiece(Square.at(location.row -2, location.col))
        
        //moves holds an array of all possible coordinates the piece can move to - which are pushed from below. For pieces this array will be longer
        //for loops would be better to generate all possible moves
        // deal with all possible moving first? Or think about how a 'checkMove' function might stop pieces from going to taken squares (or not moving beyond them)!
        const moves = []
        console.log(blockingPieceOne);
        console.log(blockingPieceTwo);
        console.log(blockingPieceBlackOne);
        console.log(blockingPieceBlackTwo);
        if (this.player === Player.WHITE) {
            if (location.row === 1 && blockingPieceOne==null && blockingPieceTwo == null) {
                moves.push(Square.at(location.row + 1, location.col))
                moves.push(Square.at(location.row + 2, location.col))
            } else if (location.row === 1 && blockingPieceOne==null && blockingPieceTwo !== null) {
                moves.push(Square.at(location.row + 1, location.col))
            } else if (location.row !== 1 && blockingPieceOne==null){
                moves.push(Square.at(location.row + 1, location.col))
            } 
            //else {
            // moves.push("");
                    
            // }
            //below for if this.player === player.BLACK
            // do the same thing; add the blockingPiece;
        } 
            else {
            if (location.row === 6 && blockingPieceBlackOne!==null && blockingPieceBlackTwo==null) {
                moves.push(Square.at(location.row - 1, location.col))
                moves.push(Square.at(location.row - 2, location.col))
            } else if (location.row === 6 && blockingPieceBlackOne==null && blockingPieceTwo != null) {
                moves.push(Square.at(location.row - 1, location.col))
            } else if (location.row !== 6 && blockingPieceBlackOne==null){
                moves.push(Square.at(location.row - 1, location.col))
                }
            
         }
            // } else {
            //     // moves.push("");
                
            // }
            
    
        return moves;
    }
}
