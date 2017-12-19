import {ServetntApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ServetntApplication};

export async function main(options?: ApplicationConfig) {
  const app = new ServetntApplication(options);

  try {
    await app.start();
  } catch (err) {
    console.error(`Unable to start application: ${err}`);
  }
  return app;
}
