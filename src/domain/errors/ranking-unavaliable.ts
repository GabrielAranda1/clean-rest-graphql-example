export class RankingUnavaliableError extends Error {
  constructor() {
    super('Ranking Unavaliable')
    this.name = 'RankingUnavaliableError'
  }
}
