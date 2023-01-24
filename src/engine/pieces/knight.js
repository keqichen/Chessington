
import Piece from './piece';
import Square from '../square';
import Player from '../player';
import Board from '../board';
import King from './king';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let moves=[];

        function checkPieceOnboard(row,col){
            if (row<8 && row >=0 && col < 8 && col >= 0){
                moves.push(Square.at(row,col))
            } 
        }

        let x = location.row;
        let y = location.col;
        
        checkPieceOnboard(x+2,y+1);
        checkPieceOnboard(x+2,y-1);
        checkPieceOnboard(x-2,y+1);
        checkPieceOnboard(x-2,y-1);
        checkPieceOnboard(x+1,y+2);
        checkPieceOnboard(x-1,y+2);
        checkPieceOnboard(x+1,y-2);
        checkPieceOnboard(x-1,y-2);
        

        return moves;
        
        }
        
    }

