import "reflect-metadata";
import { injectable } from "inversify";
import { CounterModel } from "../models/counter.model";

@injectable()
export class CounterDataSource {
  async fetchCount(amount = 1): Promise<CounterModel> {
    return new Promise<CounterModel>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
}
