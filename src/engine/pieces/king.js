import Piece from './piece';
import Square from '../square';
import Player from '../player';


export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        //moves holds an array of all possible coordinates the piece can move to - which are pushed from below. For pieces this array will be longer
        //for loops would be better to generate all possible moves
        // deal with all possible moving first? Or think about how a 'checkMove' function might stop pieces from going to taken squares (or not moving beyond them)!
        const moves = []
        //defining moves going clockwise from the first i.e. directly forward, diagonally up and right, right etc 
        moves.push(Square.at(location.row + 1, location.col));
        moves.push(Square.at(location.row + 1, location.col + 1));
        moves.push(Square.at(location.row, location.col + 1));
        moves.push(Square.at(location.row - 1, location.col + 1));
        moves.push(Square.at(location.row - 1, location.col));
        moves.push(Square.at(location.row - 1, location.col - 1));
        moves.push(Square.at(location.row, location.col - 1));
        moves.push(Square.at(location.row + 1, location.col - 1));
        //below for if this.player === player.BLACK

        return moves
    }
}
