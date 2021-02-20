import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons as Icon } from "@expo/vector-icons/";

import Card from "../../components/Card";
import { getUser } from "../../repositories/user.repository";
import api from "../../services/api";

import { Container, Input, Title, ScrollView, Paragraph } from "../../styles";
import {
  Pokemon,
  PokemonAbility,
  PokemonType,
  Result,
  User,
} from "./interfaces";
import { theme } from "../../theme";
import { Actions, Button, Divisor } from "./styles";

function SearchPokemon() {
  const [user, setUser] = useState<User>({});
  const [error, setError] = useState("");

  const [searchValue, setSearchValue] = useState("");
  const [pokemons, setPokemons] = useState<any>([]);
  const [prevPokemons, setPrevPokemons] = useState<any>([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<Pokemon[]>([]);

  const [searchOffset, setSearchOffset] = useState(200);

  const { navigate } = useNavigation();

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        setUser(value);
      } else {
        setError("Usuário não encontrado");
      }
    });
  }, []);

  function getAllPokemons() {
    var array = new Array();
    api.get(`pokemon?limit=20&offset=${searchOffset}`).then((response) => {
      response.data.results.map((result: Result, index: number) => {
        interface Item {
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
        api
          .get(result.url)
          .then((item: Item) => {
            array.push({
              id: item.data.id,
              order: item.data.order,
              name: item.data.name,
              imageUrl: item.data.sprites?.back_default,
              types: item.data.types,
              weight: item.data.weight,
              abilities: item.data.moves,
            });
            if (index + 1 === response.data.results.length) {
              setPokemons(array);
            }
          })
          .catch((err) => {});
      });
    });
  }

  function navigateToDetailsPage(id?: number) {
    navigate("pokemon-details", {
      id,
    });
  }

  function handlerInput(event: string) {
    setSearchValue(event);
    if (event.length > 1) {
      const _pokemonsFiltered = pokemons.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setPokemonsFiltered(_pokemonsFiltered);
    }
  }

  const handlerSearchButton = useCallback(() => {
    if (pokemons.length >= 0) {
      setSearchOffset(searchOffset + 20);
      setPrevPokemons([...pokemons]);
      getAllPokemons();
    }
    setPrevPokemons([...pokemons]);

    getAllPokemons();
  }, [pokemons]);

  const handlerBackButton = useCallback(() => {
    if (pokemons.length >= 0) {
      setSearchOffset(searchOffset - 20);

      setPokemons(prevPokemons);
    }
  }, [pokemons]);

  return (
    <Container>
      <Input
        placeholder={`Pesquise na lista de ${pokemons.length} pokemons...`}
        onChangeText={handlerInput}
      ></Input>
      <Actions>
        <Button onPress={handlerBackButton}>
          <Icon name="arrow-back" size={26} color={theme.colors.gray} />
        </Button>
        <Divisor />
        <Button onPress={handlerSearchButton}>
          <Icon name="arrow-forward" size={26} color={theme.colors.gray} />
        </Button>
      </Actions>
      <View style={{ width: "100%", height: "100%", paddingBottom: 50 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {pokemons.length <= 0 ? (
            <View>
              <Paragraph>
                Clique no botão "{"->"}" para carregar os pokemons
              </Paragraph>
            </View>
          ) : pokemonsFiltered.length > 0 && searchValue.length > 0 ? (
            pokemonsFiltered.map((pokemon, index) => (
              <Card
                key={index}
                name={pokemon.name}
                types={pokemon.types}
                imageUrl={pokemon.imageUrl}
                onPress={() => navigateToDetailsPage(pokemon?.id)}
              />
            ))
          ) : (
            pokemons.map((pokemon: any, index: number) => (
              <Card
                key={index}
                name={pokemon.name}
                types={pokemon.types}
                imageUrl={pokemon.imageUrl}
                onPress={() => navigateToDetailsPage(pokemon?.id)}
              />
            ))
          )}
        </ScrollView>
      </View>
    </Container>
  );
}

export default SearchPokemon;
