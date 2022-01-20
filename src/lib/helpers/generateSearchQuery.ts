import type { IRobotParts, IMonsterParts } from "$lib/types";

type AllParts = IRobotParts & IMonsterParts;
type RangeParams = {
  cooldownIndex__gte?: number;
  cooldownIndex__lte?: number;
  generation__gte?: number;
  generation__lte?: number;
  energy__gte?: number;
  energy__lte?: number;
  speed__gte?: number;
  speed__lte?: number;
  strength__gte?: number;
  strength__lte?: number;
}
export type ISearchConfig = Partial<AllParts> & RangeParams;

const BASE_URL = 'https://becoswap.com/nftmarketplace?onSale=1&'

const generateSearchQuery = (config: ISearchConfig, type: number): string => `
  ${BASE_URL}
  nftType=${type}&
  ${
    Object.entries(config)
      .map(([key, value]) => 
        `${typeof key === 'number' ? 'int' : 'string'}_${key}=${encodeURIComponent(value)}`)
      .join('&')
  }
`.replace(/\s/g, '')

export default generateSearchQuery