class Field {
    constructor(index: number) {
        this.create(index)
    }

    el: HTMLElement

    private create(index: number): void {
        this.el = document.createElement("div");
        this.el.classList.add("field");
        this.el.dataset.index = index.toString()
    }

    public tick(sign: string): void {
        this.el.innerText = sign
    }
}

export default Field