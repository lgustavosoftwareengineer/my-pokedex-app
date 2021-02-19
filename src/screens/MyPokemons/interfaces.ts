export interface User {
  name?: string;
  age?: number;
  sex?: number;
}

export interface PokemonType {
  name: string;
}

export interface Pokemon {
  id?: number;
  name?: string;
  imageUrl?: string;
  types?: PokemonType[];
}
