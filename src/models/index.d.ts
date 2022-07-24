import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum GameResultEnum {
  WHITEWINS = "WHITEWINS",
  BLACKWINS = "BLACKWINS",
  DRAW = "DRAW",
  INPROGRESS = "INPROGRESS",
  CANCELLED = "CANCELLED"
}



type ChessGameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class ChessGame {
  readonly id: string;
  readonly whitePlayerId: string;
  readonly blackPlayerId: string;
  readonly result: GameResultEnum | keyof typeof GameResultEnum;
  readonly untitledfield?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChessGame, ChessGameMetaData>);
  static copyOf(source: ChessGame, mutator: (draft: MutableModel<ChessGame, ChessGameMetaData>) => MutableModel<ChessGame, ChessGameMetaData> | void): ChessGame;
}

export declare class User {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}