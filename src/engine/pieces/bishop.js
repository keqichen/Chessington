import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    
    //Can we simplify these for loops into just one or two loops?
    //We need to remove the square that the bishop is on. We can copy the way I did this with the rook; or we can look for this built-in function that franc used

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        // four directions
        // Track 

        let x = location.row;
        let y = location.col;
        // we can only get 9 moves
        for (let i = 1; i < 8; i++) {
            //forward right
            if (x+i<8 && y+i<8){
                moves.push(Square.at(x+i, y+i));
            }
            //forward left
            if (x+i<8 && y-i<8 && y-i>0){ 
                moves.push(Square.at(x+i, y-i));
            }
            //backward right
            if (x-i>0 && x-i<8 && y+i<8){
                moves.push(Square.at(x-i, y+i));
            }
            //backward left
            if (0<x-i<8 && y-i<8 && y-i > 0){
                moves.push(Square.at(x-i, y-i));
            }
        }

        // //2.moves forward/backward to the left;
        // for (let i = 0; i < location.col; i++) {
    
        //     moves.push(Square.at(location.row + 1, location.col - 1 ))
        //     moves.push(Square.at(location.row -1, location.col -1))
        // }

        

        // for (let i = 0; i<8; i++) {
        //     if (i != location.row ){
        //     moves.push(Square.at(i, location.col));
        //     }
        //     if (i != location.col )
        //     {
        //     moves.push(Square.at(location.row, i));

        //     }
        // }

        return moves
    }
}
