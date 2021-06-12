import UiElement from "./uiElement"

class Field extends UiElement {
    selected: string | null = null

    constructor() {
        super("field")
    }

    public tick(sign: string): void {
        this.el.innerText = sign
        this.selected = sign
    }
}

export default Field