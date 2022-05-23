import "reflect-metadata";
import { Container } from "inversify";
import { CounterDataSource } from "../data/datasource/counter.datasource";
import { CounterRepositoryImpl } from "../data/repository.impl/counter.repository.impl";
import CounterService from "../domain/service/counter.service";

const di = new Container();
di.bind(CounterDataSource).toSelf().inSingletonScope();
di.bind(CounterRepositoryImpl).toSelf().inSingletonScope();
di.bind(CounterService).toSelf().inSingletonScope();

export { di };
