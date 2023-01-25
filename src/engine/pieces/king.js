import Piece from './piece';
import Square from '../square';
import Player from '../player';


export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        
        const moves = []
        
        function checkPieceOnboard(row,col){
            if (row<8 && row >=0 && col < 8 && col >= 0){
                moves.push(Square.at(row,col))
            } 
        }

        checkPieceOnboard(location.row + 1, location.col);
        checkPieceOnboard(location.row + 1, location.col + 1);
        checkPieceOnboard(location.row, location.col + 1);
        checkPieceOnboard(location.row - 1, location.col + 1);
        checkPieceOnboard(location.row - 1, location.col);
        checkPieceOnboard(location.row - 1, location.col - 1);
        checkPieceOnboard(location.row, location.col - 1);
        checkPieceOnboard(location.row + 1, location.col - 1);
        

        return moves
    }
}
