export interface Params {
  id: number;
}
export interface PokemonAbility {
  move: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  name: string;
}
export interface Pokemon {
  id?: number;
  name?: string;
  abilities?: PokemonAbility[];
  weight?: number;
  order?: number;
  types?: PokemonType[];
  imageUrl?: string;
}

export interface Response {
  data: {
    id?: number;
    name?: string;
    moves?: PokemonAbility[];
    weight?: number;
    order?: number;
    types?: PokemonType[];
    sprites?: { back_default?: string };
  };
}
