import type { INFT, IMonsterParts, IRobotParts, NFTType } from '$lib/types';
import { ENFTType } from '$lib/types';
import partNames from '$lib/types/partNames';
import monsterTraits from '$lib/constants/monsterTraits';
import robotTraits from '$lib/constants/robotTraits';

type PartKey = keyof IMonsterParts & keyof IRobotParts;
type Return = {
  name: string;
  value: string;
  index: number;
}[]

export default function parseKCharParts(KChar: INFT): Return {
  const properties = KChar.properties.filter((property) => property.type === 'property');
  const parts = properties.filter((property) => partNames.includes(property.name));
  const nftType = ENFTType[KChar.nftType] as NFTType;
  const typePartNames = ((nftType === 'Monster') ? monsterTraits : robotTraits);
  return parts.map(({ value, name }) => ({
    name,
    value,
    index: typePartNames.get(name as PartKey)?.indexOf?.(value)
  }))
}