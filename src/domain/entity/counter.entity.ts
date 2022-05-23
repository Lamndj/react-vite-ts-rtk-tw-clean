import { plainToClass } from "class-transformer";
import { CounterModel } from "../../data/models/counter.model";

export class CounterEntity {
  data?: number;

  static fromModel(model: CounterModel): CounterEntity {
    return plainToClass(CounterEntity, model);
  }
}
