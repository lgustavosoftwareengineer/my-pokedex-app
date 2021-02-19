import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../../components/Card";
import { getUser } from "../../repositories/user.repository";
import api from "../../services/api";
import { MaterialIcons as Icon } from "@expo/vector-icons/";

import {
  Container,
  Input,
  Title,
  ScrollView,
  Button,
  Paragraph,
} from "../../styles";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
}

interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
}

interface PokemonType {
  name: string;
}
interface PokemonFromApi {
  id?: number;
  name?: string;
  abilities?: PokemonAbility[];
  weight?: number;
  order?: number;
  types?: PokemonType[];
  imageUrl?: string;
}

interface Result {
  name: string;
  url: string;
}

function SearchPokemon() {
  const [user, setUser] = useState<User>({});
  const [error, setError] = useState("");

  const [searchValue, setSearchValue] = useState("");
  const [uri, setUri] = useState(`pokemon?limit=20&offset=200`);
  const [items, setItems] = useState<any>([]);

  const [searchOffset, setSearchOffset] = useState(200);

  const { navigate } = useNavigation();

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        setUser(value);
      } else {
        setError("Usuário não encontrado");
      }

      //console.log(items);
    });
  }, [user]);

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
              setItems(array);
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
  }

  const handlerSearchButtonForward = useCallback(() => {
    if (items.length >= 0) {
      setSearchOffset(searchOffset + 20);

      console.log("front: " + searchOffset);
      getAllPokemons();
    }
    getAllPokemons();
  }, [items]);

  const handlerSearchButtonBack = useCallback(() => {
    if (items.length >= 0) {
      setSearchOffset(searchOffset - 20);

      console.log("back: " + searchOffset);
      getAllPokemons();
    }
    getAllPokemons();
  }, [items]);

  return (
    <Container>
      <Input
        placeholder="Pesquise por um pokemon..."
        onChangeText={handlerInput}
      ></Input>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginBottom: "8%",
        }}
      >
        <TouchableOpacity onPress={handlerSearchButtonBack}>
          <Icon name="arrow-back" size={35}></Icon>
        </TouchableOpacity>
        <View></View>
        <TouchableOpacity onPress={handlerSearchButtonForward}>
          <Icon name="arrow-forward" size={35}></Icon>
        </TouchableOpacity>
      </View>

      <View style={{ width: "100%", height: "100%", paddingBottom: 50 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {items.length >= 1 ? (
            items.map((item: PokemonFromApi, index: number) => {
              return (
                <Card
                  key={index}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  types={item.types}
                  onPress={() => navigateToDetailsPage(item.id)}
                />
              );
            })
          ) : (
            <Title>Nenhum resultado para vc</Title>
          )}
        </ScrollView>
      </View>
      <Button>
        <Paragraph>Carregar mais pokemons</Paragraph>
      </Button>
    </Container>
  );
}

export default SearchPokemon;
