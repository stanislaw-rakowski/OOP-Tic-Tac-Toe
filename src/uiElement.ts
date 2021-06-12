abstract class UiElement {
    el: HTMLElement

    constructor(cssClass: string) {
        this.create(cssClass)
    }

    private create(cssClass: string): void {
        this.el = document.createElement("div");
        this.el.classList.add(cssClass);
    }
}

export default UiElement