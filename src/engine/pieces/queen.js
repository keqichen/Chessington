import Piece from './piece';

//Next step: try to let Queen inherits properties from bishop and rook
export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        return new Array(0);
    }
}
