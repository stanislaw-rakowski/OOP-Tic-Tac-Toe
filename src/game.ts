import Board from './board'
import { X, O, Sign } from './player'

class Game {
  board: Board
  sign: Sign = Sign.X
  winner: string | null = null
  players: {
    X: X
    O: O
  }

  constructor() {
    this.players = {
      [Sign.X]: new X(),
      [Sign.O]: new O(),
    }

    document.querySelector('#reset').addEventListener('click', (): void => {
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
      field.el.addEventListener('click', () => this.makeTurn(field))
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
    const checkField = (index: number): boolean =>
      this.board.fields[index].selected === this.sign

    const addWinClass = (index: number) =>
      this.board.fields[index].el.classList.add('win-field')

    const checkLine = (startField: number, interval: number): boolean => {
      const isWin =
        checkField(startField) &&
        checkField(startField + interval) &&
        checkField(startField + 2 * interval)
      if (isWin) {
        addWinClass(startField)
        addWinClass(startField + interval)
        addWinClass(startField + 2 * interval)
        this.winner = this.sign
        this.players[this.sign].win()
        this.board.el.classList.add('win-game')
      }
      return isWin
    }

    checkLine(0, 1) // 1 row
    checkLine(3, 1) // 2 row
    checkLine(6, 1) // 3 row

    checkLine(0, 3) // 1 column
    checkLine(1, 3) // 2 column
    checkLine(2, 3) // 3 column

    checkLine(0, 4) // 1 diagonal
    checkLine(2, 2) // 2 diagonal

    if (this.board.fields.every((Field) => Field.selected) && !this.winner) {
      console.log('remis')
      this.board.el.classList.add('win-game')
    }
  }
}

export default Game
