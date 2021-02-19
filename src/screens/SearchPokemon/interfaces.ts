export interface User {
  name?: string;
  age?: number;
  sex?: number;
}

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  name: string;
}

export interface Result {
  name: string;
  url: string;
}
