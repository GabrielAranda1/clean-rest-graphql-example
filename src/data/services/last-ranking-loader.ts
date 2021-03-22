import { RankingScore } from '@/domain/entities'
import { LastRankingLoader } from '@/domain/usecases'
import { LoadLastRankingRepository } from '@/data/contracts'
import { RankingUnavaliableError } from '@/domain/errors'

export class LastRankingLoaderService implements LastRankingLoader {
  constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavaliableError()
    }

    return this.loadLastRankingRepository.loadLastRanking()
  }
}
