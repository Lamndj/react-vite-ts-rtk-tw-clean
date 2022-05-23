import { inject, injectable } from "inversify";
import { CounterRepositoryImpl } from "../../data/repository.impl/counter.repository.impl";
import { CounterEntity } from "../entity/counter.entity";

@injectable()
export default class CounterService {
  constructor(
    @inject(CounterRepositoryImpl)
    private counterRepositoryImpl: CounterRepositoryImpl
  ) {}

  async fetchCount(): Promise<CounterEntity> {
    return this.counterRepositoryImpl.fetchCount();
  }
}
