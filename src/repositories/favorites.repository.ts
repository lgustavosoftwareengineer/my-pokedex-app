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

export const storeMyFavorites = async (poke: Pokemon) => {
  try {
    const pokemons = await AsyncStorage.getItem("@my-pokemons-favorites");
    if (pokemons !== null) {
      const pokemonsArray = JSON.parse(pokemons);
      await AsyncStorage.setItem(
        "@my-pokemons-favorites",
        JSON.stringify([...pokemonsArray, poke])
      );
      return pokemonsArray;
    } else {
      await AsyncStorage.setItem(
        "@my-pokemons-favorites",
        JSON.stringify([poke])
      );
    }
  } catch (e) {
    return e;
  }
};

export const clearAllMyFavorites = async () => {
  await AsyncStorage.setItem("@my-pokemons-favorites", JSON.stringify([]));
};

export const getMyFavorites = async () => {
  try {
    const pokemons = await AsyncStorage.getItem("@my-pokemons-favorites");
    if (pokemons !== null) {
      const pokemonsArray = JSON.parse(pokemons);
      return pokemonsArray;
    } else {
    }
  } catch (e) {
    return e;
  }
};
