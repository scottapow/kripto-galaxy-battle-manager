import type { IRobotParts, TraitName } from "$lib/types"

const robotTraits = new Map<keyof IRobotParts, Readonly<Array<TraitName>>>();

export const head = [`Hevin`, `Flynt`, `Elmit`, `Enzay`, `Dravis`, `Ivula`, `Enli`, `Lotisa`, `Hitcka`, `Infina`, `Yarbo`, `Leznit`, `Titan`, `Geto`, `Prioza`, `Abel`, `Aayan`, `Aden`, `Bentlee`, `Brycen`, `Cayson`, `Issac`, `Jaiden`, `Javion`, `Jayce`, `Kaiden`, `Kamden`, `Kameron`, `Kohen`, `Landyn`, `Misael`, `Carl`] as const;
export const anten = [`Azent`, `Spec`, `Amlin`, `Amtrix`, `Shanray`, `Tiznel`, `Spir`, `Blisz`, `Digitron`, `Fiercon`, `Lanz`, `Gosine`, `Chupl`, `Meganil`, `Floria`, `Reece`, `Tristian`, `Alaric`, `Arjun`, `Benson`, `Boone`, `Cairo`, `Chaim`, `Dallas`, `Dalton`, `Ellis`, `Enoch`, `Gatlin`, `Hamza`, `Hassan`, `Jakari`, `Dario`] as const;
export const eye = [`Barel`, `Techoking`, `Klasp`, `Crytokon`, `Lyrung`, `Kream`, `Scretl`, `Connex`, `Eazybit`, `EleBliss`, `Marcell`, `Nerdware`, `Intrino`, `IntraHop`, `Drifly`, `Keanu`, `Kyree`, `Lawson`, `Marlon`, `Musa`, `Peyton`, `Sekani`, `Shiloh`, `Skyler`, `Cory`, `Derek`, `Devon`, `Dominik`, `Joel`, `Eliseo`, `Gianni`, `Alvaro`] as const;
export const shoulder = [`NaKnow`, `Aliva`, `Varian`, `Renegy`, `KinderLot`, `Vakita`, `Invictus`, `PalmPal`, `Sapien`, `Crenly`, `Zinikis`, `Cobaz`, `CalciteX`, `Inova`, `Lanlink`, `Embren`, `Quantico`, `Sooper`, `Walyn`, `Leez`, `Hiphic`, `Rentoor`, `Kiddily`, `Tourish`, `Knowza`, `Drivemo`, `Deduc`, `Nutration`, `Sygun`, `Clogau`, `Jabari`, `Kyng`] as const;
export const arm = [`Wani`, `Deron`, `Xozti`, `Mivety`, `Rengvo`, `Kariox`, `Pozzby`, `Heyinz`, `Watello`, `Doniry`, `Zlymo`, `Wroy`, `Nolunt`, `Wopno`, `Hobax`, `Hoones`, `Pangvo`, `Joni`, `Zize`, `Gomof`, `Myowy`, `Shlofy`, `Lariox`, `Dravo`, `Lozzby`, `Xeanco`, `Emota`, `Dozti`, `Jexmon`, `Woello`, `Lucca`, `Osiris`] as const;

export type RobotHead = typeof head;
export type RobotAnten = typeof anten;
export type RobotEye = typeof eye;
export type RobotShoulder = typeof shoulder;
export type RobotArm = typeof arm;

robotTraits.set(`head`, head);
robotTraits.set(`anten`, anten);
robotTraits.set(`eye`, eye);
robotTraits.set(`left_shoulder`, shoulder);
robotTraits.set(`right_shoulder`, shoulder);
robotTraits.set(`left_arm`, arm);
robotTraits.set(`right_arm`, arm);

export default robotTraits;