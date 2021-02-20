import AsyncStorage from "@react-native-async-storage/async-storage";

export interface PokemonType {
  type?: {
    name?: string;
    url?: string;
  };
}

interface Pokemon {
  id?: number;
  name?: string;
  imageUrl?: string;
  types?: PokemonType[];
}

export const storeMyPokemon = async (poke: Pokemon) => {
  try {
    const pokemons = await AsyncStorage.getItem("@my-pokemons");
    if (pokemons !== null) {
      const pokemonsArray = JSON.parse(pokemons);
      await AsyncStorage.setItem(
        "@my-pokemons",
        JSON.stringify([...pokemonsArray, poke])
      );
      return pokemonsArray;
    } else {
      await AsyncStorage.setItem("@my-pokemons", JSON.stringify([poke]));
    }
  } catch (e) {
    return e;
  }
};

export const clearAllPokemons = async () => {
  await AsyncStorage.setItem("@my-pokemons", JSON.stringify([]));
};

export const getPokemons = async () => {
  try {
    const pokemons = await AsyncStorage.getItem("@my-pokemons");
    if (pokemons !== null) {
      const pokemonsArray = JSON.parse(pokemons);
      return pokemonsArray;
    } else {
    }
  } catch (e) {
    return e;
  }
};
