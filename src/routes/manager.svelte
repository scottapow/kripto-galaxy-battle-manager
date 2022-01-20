<script context="module" lang="ts">
  import type { INFTsResponse } from "$lib/types";
  import KCharCard from '$lib/components/KCharCard.svelte';
  import baseURL from '$lib/constants/baseURL';
  import KCharAssemblyOptions from "$lib/components/KCharAssemblyOptions.svelte";
  const address = import.meta.env.WALLET_ADDRESS;

  enum ENFTType {
    Robot = 3,
    Monster = 4,
    Planet = 5,
  }

  const getUrlWithNFTTypeAndID = (type: number, id: number) => `${baseURL}nfts?ids=${type}-${id}&offset=0&orderDirection=desc&orderBy=createdAt`;
  const getUrlWithNFTType = (type: number) => `${baseURL}nfts?owner=${address}&offset=0&limit=12&nftType=${type}&orderDirection=desc&orderBy=createdAt`;
  const getJson = async (response: Response): Promise<INFTsResponse['rows']> => (await response.json()).rows;

  async function loadKChars() {
    try {
      const responses = await Promise.all([
        fetch(getUrlWithNFTType(ENFTType.Robot)),
        fetch(getUrlWithNFTType(ENFTType.Monster)),
        fetch(getUrlWithNFTType(ENFTType.Planet)),
      ]);

      const [
        robots, 
        monsters, 
        planets
      ] = await Promise.all(responses.map(getJson));

      return { 
        data: { robots: robots, monsters, planets },
        error: null,
      };
    } catch (error) {
      return {
        data: {},
        error: new Error(`Could not load a url ${error}`),
      };
    }
  }

  let kCharResponse = loadKChars()
</script>

<svelte:head>
	<title>Manager</title>
</svelte:head>

<h1>Manager</h1>

{#await kCharResponse then value}
  <h2>Monsters</h2>
  <section>
    {#each value.data.monsters as row}
      <KCharCard KChar={row} />
    {/each}
    <KCharAssemblyOptions KChars={value.data.monsters}/>
  </section>


  <h2>Robots</h2>
  <section>
    {#each value.data.robots as row}
      <KCharCard KChar={row}/>
    {/each}
    <KCharAssemblyOptions KChars={value.data.robots}/>
  </section>
{/await}

<style>
  h2 {
    font-size: 2.4rem;
    margin-bottom: 16px;
    margin-top: 24px; 
  }
</style>