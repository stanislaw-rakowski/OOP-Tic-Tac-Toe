import Board from "./board"

class Game {
    constructor(name: string) {
        this.name = name
        this.board = new Board()
        console.log(this.board)

        for (const field of this.board.fields) {
            console.log(field)
            field.el.addEventListener("click", () => {
                field.tick('x')
            })
        }
    }

    name: string
    board: object
}

export default Game