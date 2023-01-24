import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let moves=[];

        // 8 directions
        for (let i = 1; i < 8; i++) {
            //forward right
            if (x + i+1 < 8 && y + i < 8 && !forwardRightBlocked) {
                moves.push(Square.at(x + i+1, y + i));
                if (this.checkForPiece(board, x + i, y + i)) {
                    forwardRightBlocked = true;
                    if (!this.canPieceBeTaken(board, x + i, y + i)) {
                        moves.pop();
                    }
                }
            }
            //forward left; off-by-one error befoe: should be equal to or less than for 0 values as the '0'th index is a legit square
            if (x + i < 8 && y - i < 8 && y - i >= 0) {
                moves.push(Square.at(x + i, y - i));
                if (this.checkForPiece(board, x + i, y - i)) forwardLeftBlocked = true;
            }
            //backward right
            if (x - i >= 0 && x - i < 8 && y + i < 8) {
                moves.push(Square.at(x - i, y + i));
                if (this.checkForPiece(board, x - i, y + i)) backwardRightBlocked = true;
            }
            //backward left
            if (x - i >= 0 && y - i < 8 && y - i >= 0) {
                moves.push(Square.at(x - i, y - i));
                if (this.checkForPiece(board, x - i, y - i)) backwardLeftBlocked = true;
            }
        }
        return moves;
    }
}
