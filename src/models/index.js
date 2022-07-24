// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const GameResultEnum = {
  "WHITEWINS": "WHITEWINS",
  "BLACKWINS": "BLACKWINS",
  "DRAW": "DRAW",
  "INPROGRESS": "INPROGRESS",
  "CANCELLED": "CANCELLED"
};

const { ChessGame, User } = initSchema(schema);

export {
  ChessGame,
  User,
  GameResultEnum
};