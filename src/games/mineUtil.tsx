
export class Square {
    constructor(public x: number, public y: number,
                public hidden = true,
                public isBomb: boolean,
    ){}
}

export class Game {
    constructor(public alive = true,
                public grid: Array<Array<Square>>,
    ){}
}