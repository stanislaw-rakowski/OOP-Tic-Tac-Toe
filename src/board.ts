import Field from "./field"

class Board {
    constructor() {
        this.create()

        for (let i = 1; i < 10; i++) {
            const field = new Field(i)
            this.fields.push(field)
            this.board.appendChild(field.el);
        }
    }

    board: HTMLElement
    fields: Object[] = []

    private create(): void {
        this.board = document.createElement("div");
        this.board.classList.add("board");
        document.body.appendChild(this.board);
    }


}

export default Board