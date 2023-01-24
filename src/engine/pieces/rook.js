import Piece from './piece';
import Square from '../square';
import Player from '../player';



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
        let location = board.findPiece(this)
        const moves = []

        //getting a check that stops pieces from moving through others
        // When we are iterating through a loop, adding all moves in a certain direction... 
        // we want to check on each square whether a piece is there (using getPiece or our own function)
        // If there is a piece on that square, do not add any squares beyond that (in that direction)
        // In other words, either 'break' from that for loop, OR set the increment counter to the end 
        // In this case, if the rook is in the middle of the board, there will be four directions. We need a for loop per direction, or to somehow merge it with the below (e.g. by skipping to the location.row/location.col, then skipping on)

        

        // our piece (4,4); blocking(4.6); not include (4,7) or after;
        // for (let i = 0; i<8; i++) {
        //     if (i != location.row ){
        //     //    console.log(checkForPiece(board.getPiece(Square.at(i,location.col))))
            
        //     moves.push(Square.at(i, location.col));
        //     }
        //     if (i != location.col )
        //     {
        //     // console.log(checkForPiece(board.getPiece(Square.at(location.row,i))))
        //     moves.push(Square.at(location.row, i));

        //     }
        // }

        //1.forward 
        for (let i=location.row+1; i<8; i++){
            moves.push(Square.at(i, location.col));
            if (this.checkForPiece(board,i,location.col)){
                break;
            }
        }

        //2.backward
        for (let i=location.row-1; i>=0; i--){
            moves.push(Square.at(i, location.col));
            if (this.checkForPiece(board,i,location.col)){
                break;
            }
        }
    
        //3.left
        for (let i = location.col - 1; i>=0;i--) {
            moves.push(Square.at(location.row, i));
            if (this.checkForPiece(board,location.row,i)) break;
        
        }
        //4.rigth
        for (let i = location.col + 1; i<8;i++) {
            moves.push(Square.at(location.row, i));
            if (this.checkForPiece(board,location.row,i)) break;
        
        }

        return moves
    }
}
