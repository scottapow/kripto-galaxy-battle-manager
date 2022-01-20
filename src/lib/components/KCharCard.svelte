<script lang="ts">
  import type { INFT } from '$lib/types';
  import type { ISearchConfig } from '$lib/helpers/generateSearchQuery';
  import generateSearchQuery from '$lib/helpers/generateSearchQuery';
  import parseKCharParts from '$lib/helpers/parseKCharParts';
  import getKCharPartner from '$lib/helpers/getKCharPartner';

  export let KChar: INFT;

  const stats = KChar.properties.filter((property) => property.type === 'stats');
  const partsParsed = parseKCharParts(KChar);
  const perfectPartner = getKCharPartner(KChar);
  
  const partnerConfig: ISearchConfig = 
    Object.entries(perfectPartner).reduce((acc, [key, value]) => ({...acc, [key]: value.name}), {})
  const perfectPartnerQuery = generateSearchQuery(partnerConfig, KChar.nftType)
</script>

<div class="kchar">
  <div class="col --8 mr-24">
    <img src="{KChar.fileUrl}" alt="{KChar.name} Card">
    <ul class="kchar-stats">
      {#each stats as property}
        <li><b>{property.name}</b>: {property.intValue}</li>
      {/each}
    </ul>
  </div>
  <div class="col --4">
    <ul>
      {#each partsParsed as part}
        <li><b>{part.name}</b>: {part.value} {part.index ? `[${part.index}]` : ''}</li>      
      {/each}
    </ul>
    <a href={perfectPartnerQuery}>Perfect Partner</a>
    <ul>
      {#each Object.entries(perfectPartner) as partnerPart}
        <li><b>{partnerPart[0]}</b>: {partnerPart[1].name} [{partnerPart[1].index}]</li>      
      {/each}
    </ul>
  </div>
</div>

<style>
  .kchar {
    display: flex;
  }
  .col {
    width: 100%;
  }
  img {
    max-width: 300px;
  }
  .kchar-stats li b::first-letter { text-transform: capitalize; }
  @media (min-width: 576px) {
    .col.--8 {
      flex-basis: 66.666%;
    }
    .col.--4 {
      flex-basis: 33.333%;
    }
    .mr-24 {
      margin-right: 24px;
    }
  }
</style>