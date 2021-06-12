import Board from "./board"

enum Sign {
    X = "X",
    O = "O"
}

class Game {
    name: string
    board: Board
    sign: string = Sign.O
    winner: string | null = null

    constructor(name: string) {
        this.name = name

        document.querySelector("#reset").addEventListener("click", () => {
            this.board.destroy()
            this.startGame()
            this.winner = null;
        })

        this.startGame()
    }

    startGame() {
        this.board = new Board()
        for (const field of this.board.fields) {
            field.el.addEventListener("click", () => this.makeTurn(field))
        }
    }

    makeTurn(field) {
        if (field.selected || this.winner) return
        field.tick(this.sign)
        this.checkWin()
        if (this.sign === Sign.O) {
            this.sign = Sign.X
        } else {
            this.sign = Sign.O
        }
    }

    checkWin() {

        const checkField = (index: number): boolean => this.board.fields[index].selected === this.sign

        const checkLine = (startField: number, interval: number): boolean => checkField(startField) && checkField(startField + interval) && checkField(startField + 2 * interval)

        const checkHorizontals = (): boolean => checkLine(0, 1) || checkLine(3, 1) || checkLine(6, 1)
        const checkVerticals = (): boolean => checkLine(0, 3) || checkLine(1, 3) || checkLine(2, 3)
        const checkDiagonals = (): boolean => checkLine(0, 4) || checkLine(2, 2)

        if (checkHorizontals() || checkVerticals() || checkDiagonals()) {
            console.log('win', this.sign)
            this.winner = this.sign
            this.board.el.classList.add("wonGame");
        }

        if (this.board.fields.every(Field => Field.selected)) {
            console.log("remis")
            this.board.el.classList.add("wonGame");
        }
    }
}

export default Game