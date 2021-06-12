import UiElement from './uiElement'

export enum Sign {
  X = 'X',
  O = 'O',
}
export class Player extends UiElement {
  public sign: string
  public wins: number = 0

  constructor(sign) {
    super('score')
    this.sign = sign
    document.querySelector('#scoreBoard').appendChild(this.el)
    this.el.innerText = this.getScoreText()
  }

  public win(): void {
    this.wins++
    this.el.innerText = this.getScoreText()
  }

  private getScoreText(): string {
    return `${this.sign}: ${this.wins}`
  }
}
