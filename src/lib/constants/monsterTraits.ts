import type { IMonsterParts, TraitName } from "$lib/types"

const monsterTraits = new Map<keyof IMonsterParts, Readonly<Array<TraitName>>>();

export const head = [`Golgadok`, `Erzaroth`, `Rogleth`, `Onemor`, `Onaral`, `Jorkamith`, `Minog`, `Tolgren`, `Astrollan`, `Sir'gaz`, `Azalath`, `Eth'ton`, `Aglikath`, `Thirokath`, `Xazodol`, `Uzrezan`, `Ir'giur`, `Jizil`, `Rugluth`, `Malvozun`, `Istrennan`, `Eglexuug`, `Telgonik`, `Riz'gath`, `Araxeth`, `Dragriun`, `Thaz'gadiz`, `Sar'udon`, `Tolvenuth`, `Gorkud`, `Belriluk`, `Ar'anius`] as const;
export const horn = [`Zorkoth`, `Ingroneg`, `Rug'drak`, `Gol'ganoth`, `Ogthamith`, `Ozzolis`, `Gogladeth`, `Sugach`, `Zozzug`, `Tazeduth`, `Brornazeth`, `Zunamul`, `Ostromuth`, `Zigthuz`, `Xakaal`, `Ath'tor`, `Tholvexath`, `Arkallad`, `Ilgalan`, `Salralloth`, `Zoz'gothur`, `Dolgimoth`, `Kor'il`, `Trozran`, `Bangrag`, `Zegmeman`, `Sath'tuun`, `Jorkanoth`, `Bigmanoth`, `Jargres`, `Duth'tith`, `Morthrimul`] as const;
export const eye = [`Thagan`, `Vennaniuch`, `Trarzonath`, `Xolrekil`, `Zagithon`, `Zaz'gaan`, `Dolraz`, `Sogmag`, `Zanol`, `Ziralen`, `Igthanoth`, `Kezinok`, `Ruzzomod`, `Darraul`, `Jogrinath`, `Vulvoral`, `Zag'thol`, `Elgorok`, `Gogmoz`, `Agthiun`, `Zarken`, `Jeg'thennon`, `Trirrun`, `Kur'goth`, `Voggenor`, `Rath'tathan`, `Ther'gekas`, `Thazgothol`, `Morthroth`, `Juranoth`, `Bath'toruth`, `Birgak`] as const;
export const ear = [`Jurod`, `Durnan`, `Marrollun`, `Xastrath`, `Azgath`, `Gugganoth`, `Allmallath`, `Mangrozos`, `Sezzothod`, `Bugroth`, `Ralvemith`, `Tul'geth`, `Brolvumaath`, `Tharamas`, `Bukamuun`, `Uzganol`, `Olmanith`, `Olrikich`, `Malmidal`, `Kegdrath`, `Xalvomok`, `Zingrakon`, `Tir'gathuun`, `Oggollor`, `Sith'ten`, `Sazamen`, `Xalrumuk`, `Dugothok`, `Almauth`, `Kigthos`, `Thalrenoth`, `Razrimag`] as const;
export const arm = [`Zor'gonnaath`, `Siroxez`, `Rugthoth`, `Dangron`, `Zelmamath`, `Thuzrak`, `Thogranol`, `Xog'thekan`, `Kol'gon`, `Zig'thuthog`, `Girgonoth`, `Egronnoth`, `Goglozan`, `Droth'tuud`, `Thelmathon`, `Dugdron`, `Vagdrul`, `Ogthallar`, `Tarthruuk`, `Ogdrannath`, `Sezran`, `Tonnenas`, `Izzid`, `Jezrin`, `Trokorath`, `Trolronath`, `Eg'thollus`, `Xugdranal`, `Gelvach`, `Traroneg`, `Ronaath`, `Drug'drak`] as const;
export const skill = [`Protection of Stone`, `Fiery Frenzy`, `Carnage Aura`, `Gift of Blizzards`, `Seal of Revival`, `Ceremony of Poison`, `Mind Assault`, `Concentration of Courage`, `Curse of Demon Fire`, `Thunder Blaze`, `Freeze Mind`, `Beam of Recovery`, `Acid Wrath`, `Carnage of Shadows`, `Ice Defence`, `Wind Flare`, `Assault of Nature`, `Avalanche`, `Revitalize`, `Flare of Acid`, `Bend Mind`, `Victory of Faith`, `Arcane-fire Typhoon`, `Annihilation Wave`, `Tidal Wave`, `Divine Healing`, `Poison Whip`, `Delusion of Fire`, `Blast of Demons`, `Resurrection Rune`, `Hallowing of Death`, `Blessing of Agony`] as const;

export type MonsterHead = typeof head;
export type MonsterHorn = typeof horn;
export type MonsterEye = typeof eye;
export type MonsterEar = typeof ear;
export type MonsterArm = typeof arm;
export type MonsterSkill = typeof skill;

monsterTraits.set('head', head);
monsterTraits.set('horn', horn);
monsterTraits.set('eye', eye);
monsterTraits.set('ear', ear);
monsterTraits.set('left_arm', arm);
monsterTraits.set('right_arm', arm);
monsterTraits.set('skill', skill);

export default monsterTraits