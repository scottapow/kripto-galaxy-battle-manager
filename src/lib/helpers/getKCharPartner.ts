import type { PartKey, INFT, NFTType } from '$lib/types';
import getTypePartNames from './getTypePartNames';
import parseKCharParts from './parseKCharParts';
import { ENFTType } from '$lib/types';

type Partner = Record<string, {index: number, name: string, mrank?: string}>;

export default function getKCharPartner(KChar: INFT): Partner {
  const nftType = ENFTType[KChar.nftType] as NFTType;
  
  const typePartNames = getTypePartNames(nftType)
  const partsParsed = parseKCharParts(KChar)

  return partsParsed.reduce((acc, cur) => {
    const isMutated = cur.value.includes(':')

    if (isMutated) {
      const index = Number(cur.value.split(':')[1]) + 1
      acc[cur.name] = {
        index,
        name: `${cur.value.split(':')[0]}:${Number(cur.value.split(':')[1]) + 1}`
      } 
    } else {
      const index = cur.index % 2 ? cur.index - 1 : cur.index + 1
      acc[cur.name] = {
        index,
        name: typePartNames.get(cur.name as PartKey)[index]
      } 
    }

    return acc
  }, {})
}