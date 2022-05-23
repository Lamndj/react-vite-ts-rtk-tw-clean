import "reflect-metadata";
import { inject, injectable } from "inversify";
import { CounterEntity } from "../../domain/entity/counter.entity";
import CounterRepository from "../../domain/repository/counter.repository";
import { CounterDataSource } from "../datasource/counter.datasource";
import { CounterModel } from "../models/counter.model";

@injectable()
export class CounterRepositoryImpl implements CounterRepository {
  constructor(
    @inject(CounterDataSource)
    private counterDataSource: CounterDataSource
  ) {}

  async fetchCount(): Promise<CounterModel> {
    const data: CounterModel = await this.counterDataSource.fetchCount();

    return CounterEntity.fromModel(data);
  }
}
