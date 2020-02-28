import { version } from '../../package.json';

export const environment: {production: boolean, VERSION: string} = {
  production: true,
  VERSION: version,
};
