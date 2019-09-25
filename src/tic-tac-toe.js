class TicTacToe {
    constructor() {
        this.isX = true;
        this.currentPlayerSymbol = 'x';
        this.board = [[null, null, null], [null, null, null], [null, null, null]]
        //this.board = Array(3).fill(Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        const value = this.board[rowIndex][columnIndex];

        if (!value) {
            this.board[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.isX ? 'o' : 'x';
            !this.isX;
        }
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {
        return JSON.stringify(this.board).indexOf('null') === -1;
    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }

    hasWinner() {
        const winPositions = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]];
        ];

        winPositions.forEach(position => {
            
        });
    }
}

module.exports = TicTacToe;
