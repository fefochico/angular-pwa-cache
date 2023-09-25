export interface PaisInterface {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2019'?: number;
  '2014'?: number;
  '2018'?: number;
  '1999'?: number;
  '2017'?: number;
  '2006'?: number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Aym;
  bre: Aym;
  ces: Aym;
  cym: Aym;
  deu: Aym;
  est: Aym;
  fin: Aym;
  fra: Aym;
  hrv: Aym;
  hun: Aym;
  ita: Aym;
  jpn: Aym;
  kor: Aym;
  nld: Aym;
  per: Aym;
  pol: Aym;
  por: Aym;
  rus: Aym;
  slk: Aym;
  spa: Aym;
  srp: Aym;
  swe: Aym;
  tur: Aym;
  urd: Aym;
  zho: Aym;
}

interface Languages {
  aym?: string;
  que?: string;
  spa: string;
  grn?: string;
  ber?: string;
  mey?: string;
  cha?: string;
  eng?: string;
  bjz?: string;
  fra?: string;
  por?: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  PEN?: PEN;
  ARS?: PEN;
  DZD?: PEN;
  MAD?: PEN;
  MRU?: PEN;
  USD?: PEN;
  BOB?: PEN;
  GTQ?: PEN;
  MXN?: PEN;
  UYU?: PEN;
  BZD?: PEN;
  PAB?: PEN;
  CRC?: PEN;
  HNL?: PEN;
  CLP?: PEN;
  EUR?: PEN;
  DOP?: PEN;
  NIO?: PEN;
  CUC?: PEN;
  CUP?: PEN;
  XAF?: PEN;
  VES?: PEN;
  PYG?: PEN;
  COP?: PEN;
}

interface PEN {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  aym?: Aym;
  que?: Aym;
  spa: Aym;
  grn?: Aym;
  ber?: Aym;
  mey?: Aym;
  cha?: Aym;
  eng?: Aym;
  bjz?: Aym;
  fra?: Aym;
  por?: Aym;
}

interface Aym {
  official: string;
  common: string;
}