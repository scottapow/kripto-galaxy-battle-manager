<script lang="ts">
import getKCharPartner from '$lib/helpers/getKCharPartner';
import parseKCharParts from '$lib/helpers/parseKCharParts';

  import type { INFT } from '$lib/types';

  export let KChars: Array<INFT>;

  for (let i = 0; i < KChars.length; i++) {
    const KChar = KChars[i];
    const partsParsed = parseKCharParts(KChar)
    const partner = getKCharPartner(KChar);

    for (let j = 0; j < KChars.length; j++) {
      const KChar2 = KChars[j];
      const partsParsed2 = parseKCharParts(KChar2)
      console.log({ partner, partsParsed2 })
    }
  }
</script>

<div>
  i dont know yet
</div>