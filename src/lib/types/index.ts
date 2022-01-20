export interface IRobotParts {
  head: string;
  anten: string;
  eye: string;
  left_shoulder: string;
  right_shoulder: string;
  left_arm: string;
  right_arm: string;
}

export interface IMonsterParts {
  head: string;
  horn: string;
  eye: string;
  ear: string;
  left_arm: string;
  right_arm: string;
  skill: string;
}

export type PropertyType = 'other' | 'property' | 'stats' | 'level'
export type StatsName = 'energy' | 'speed' | 'strength' | 'planet_x' | 'planet_y' | 'size';
export type PropertyName = 'rarity' | 'card' | 'anten' | 'horn' | 'skill' | 'head' | 'eye' | 'ear' | 'left_shoulder' | 'right_shoulder' | 'left_arm' | 'right_arm' | 'eye_color' | 'head_color';
export type OtherName = 'sireId' | 'matronId' | 'siringWithId' | 'cooldownEndBlock';
export type LevelName = 'generation' | 'cooldownIndex'

export type Trait = number;
export type TraitName = string;

export interface IProperty {
  name: string;
  type: PropertyType;
  intValue?: number;
  maxValue?: number;
  value: string;
  image?: string;
}

export interface ICreator {
  name: string;
  avatar: string;
  website: string;
}

export enum ENFTType {
  Robot = 3,
  Monster = 4,
  Planet = 5,
}

export type NFTType = keyof typeof ENFTType

export interface INFT {
  id: string;
  name: string;
  nftType: number;
  nftId: string;
  creator: string;
  owner: string;
  description?: string;
  price: string;
  auctionPrice?: number;
  maxBidPrice?: number;
  fileUrl: string;
  thumbnail?: string;
  tokenUrl?: string;
  votes: number;
  exchangeAddress: string;
  quoteToken: string;
  attributes: unknown;
  listedAt?: string;
  soldAt: string;
  onSale: boolean;
  status: number;
  createdAt: string;
  updatedAt: string;
  creatorInfo: ICreator;
  properties: Array<IProperty>;
}

export interface INFTsResponse {
  count: number;
  rows: Array<INFT>;
}

export type PartKey = keyof IMonsterParts & keyof IRobotParts;