import Board from "./board"
import { X, O, Sign } from "./player"

class Game {
    board: Board
    sign: Sign = Sign.X
    winner: string | null = null
    players: {
        X: X,
        O: O
    }
 

    constructor() {
        this.players = {
          [Sign.X]: new X(),
          [Sign.O]: new O(),
        }

        document.querySelector("#reset").addEventListener("click", (): void => {
            this.board.destroy()
            this.startGame()
        })

        this.startGame()
    }

    startGame(): void {
        this.board = new Board()
        this.winner = null
        this.sign = Sign.X
        for (const field of this.board.fields) {
            field.el.addEventListener("click", () => this.makeTurn(field))
        }
    }

    makeTurn(field): void {
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
            console.log('win', this)
            this.winner = this.sign
            this.players[this.sign].win()
            this.board.el.classList.add("won-game");
        }

        if (this.board.fields.every(Field => Field.selected)) {
            console.log("remis")
            this.board.el.classList.add("won-game");
        }
    }
}

export default Game