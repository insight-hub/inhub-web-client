import { Container } from 'inversify';

import { User } from './models/user';
import { Api } from './api/api';
import { TYPES } from './iocTypes';

export const container = new Container();

container
  .bind<Api>(TYPES.Api)
  // TODO api config service
  .toDynamicValue(() => new Api({ base: 'https://localhost:1234' }))
  .inSingletonScope();
container.bind<User>(TYPES.User).to(User).inSingletonScope();
