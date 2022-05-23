import { plainToClass } from "class-transformer";

export class CounterModel {
  data?: number;

  static fromJSON(json: any): CounterModel {
    return plainToClass(CounterModel, json);
  }
}
