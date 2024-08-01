export type WordRepetedModel = {
    word: string,
    repetitions: number
}

export type WordModel = {
    totalWord: number,
    totalLetter: number,
    totalSpace: number,
    mostRepeatedWord: WordRepetedModel[]
}