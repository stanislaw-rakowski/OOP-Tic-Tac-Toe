abstract class Player {
    public abstract sign: string
    public wins: number = 0

    public win(): void {
        this.wins++
    }

}

export enum Sign {
  X = 'X',
  O = 'O',
}

export class X extends Player {
    sign: Sign.X
}
export class O extends Player {
    sign: Sign.O
}


