import 'reflect-metadata';
import { Container } from 'typedi';
import { ConfigService } from '@talkspace/config-service';

export async function setup() {
  await Container.get(ConfigService).make();
}
