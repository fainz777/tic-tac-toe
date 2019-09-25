class TicTacToe {
    constructor() {
        this.isX = true;
        this.currentPlayerSymbol = 'x';
        this.winner = null;
        this.board = [[null, null, null], [null, null, null], [null, null, null]]
        //this.board = new Array(3).fill(new Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        const value = this.board[rowIndex][columnIndex];

        if (!value) {
            this.board[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.isX ? 'o' : 'x';
            this.isX = !this.isX;
        }
    }

    isFinished() {
        return this.isWinner() || this.isDraw();
    }

    getWinner() {
        this.isWinner();

        return this.winner;
    }

    noMoreTurns() {
        return JSON.stringify(this.board).indexOf('null') === -1;
    }

    isDraw() {
        return this.noMoreTurns() && !this.isWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }

    isWinner() {
        const winPositions = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ];


        for (let i = 0; i < winPositions.length; i++) {
            const [a, b, c] = winPositions[i];

            if (this.board[a[0]][a[1]] && this.board[a[0]][a[1]] === this.board[b[0]][b[1]] && this.board[a[0]][a[1]]  === this.board[c[0]][c[1]]) {
                this.winner = this.board[a[0]][a[1]];
                return true;
            }
        }

        return false;
    }
}

module.exports = TicTacToe;
