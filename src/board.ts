import Field from "./field"
import UiElement from "./uiElement"

class Board extends UiElement {
    fields: Field[] = []

    constructor() {
        super("board")
        document.querySelector("#game").appendChild(this.el);

        for (let i = 0; i < 9; i++) {
            const field: Field = new Field(i)
            this.fields.push(field)
            this.el.appendChild(field.el);
        }
    }

    public destroy(): void {
        this.el.remove()
    }
}

export default Board