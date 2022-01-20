import type { INFTsResponse } from "$lib/types";
import baseURL from '$lib/constants/baseURL';

const address = import.meta.env.WALLET_ADDRESS;

export const getUrlWithNFTTypeAndID = (type: number, id: number): string => 
  `${baseURL}nfts?ids=${type}-${id}&offset=0&orderDirection=desc&orderBy=createdAt`;

export const getUrlWithNFTType = (type: number): string => 
  `${baseURL}nfts?owner=${address}&limit=12&nftType=${type}&offset=0&orderDirection=desc&orderBy=createdAt`;

export const getJson = async (response: Response): Promise<INFTsResponse['rows']> => (await response.json()).rows;
