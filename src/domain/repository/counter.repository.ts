import { CounterModel } from "../../data/models/counter.model";

export default interface CounterRepository {
  fetchCount(): Promise<CounterModel>;
}
