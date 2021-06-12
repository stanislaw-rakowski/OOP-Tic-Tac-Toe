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
    this.setScoreText()
  }

  public win(): void {
    this.wins++
    this.setScoreText()
  }

  private setScoreText(): void {
    this.el.innerText = `${this.sign}: ${this.wins}`
  }
}
