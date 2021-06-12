import UiElement from "./uiElement"

class Field extends UiElement {
    selected: string | null = null
    index: number

    constructor(index: number) {
        super("field")
        this.index = index
    }

    public tick(sign: string): void {
        this.el.innerText = sign
        this.selected = sign
    }
}

export default Field