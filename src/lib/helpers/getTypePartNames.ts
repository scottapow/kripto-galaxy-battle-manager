import type { NFTType } from '$lib/types';
import monsterTraits from '$lib/constants/monsterTraits';
import robotTraits from '$lib/constants/robotTraits';

export default function getTypePartNames(nftType: NFTType): typeof monsterTraits | typeof robotTraits {
  return ((nftType === 'Monster') ? monsterTraits : robotTraits);
}


