
import { DB_PROVIDER, REGISTER_MODEL_PROVIDER,} from '@constants';
import { RegisterModel } from './user.model';

export const registerProviders = [{
  provide: REGISTER_MODEL_PROVIDER,
  useValue: RegisterModel,
  inject: [DB_PROVIDER]
}];

