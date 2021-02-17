import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons/";

import {
  Container,
  Title,
  Paragraph,
  Button as BackButton,
} from "../../styles";

import { items } from "../../testData";
import { theme } from "../../theme";
import {
  Actions,
  Button,
  ButtonText,
  Card,
  Divisor,
  PokemonName,
  Skill,
  SkillLabel,
  SkillsContainer,
  SectionTitle,
  Header,
  CardTitle,
  CardSubtitle,
} from "./style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

interface Params {
  id: number;
}

interface Pokemon {
  id?: number;
  name?: string;
  types?: string[];
  imageUrl?: string;
}

function PokemonDetails() {
  const route = useRoute();
  const [pokemon, setPokemon] = useState<Pokemon>({});

  const [isOnMyPokedex, setIsOnMyPokedex] = useState({
    text: "Adicionar na Pokedex",
    state: false,
  });
  const [isOnMyFavorites, setIsOnMyFavorites] = useState({
    text: "Adicionar aos favoritos",
    state: false,
  });

  const params = route.params as Params;

  const { navigate, goBack } = useNavigation();

  const isOnMyFavoritesExpression = isOnMyFavorites.state
    ? theme.colors.red
    : theme.colors.black;

  const isOnMyFavoritesPokedexExpression = isOnMyPokedex.state
    ? theme.colors.red
    : theme.colors.black;

  function handlerAddInFavorites(id: number) {
    setIsOnMyFavorites({
      state: !isOnMyFavorites.state,
      text: "Nos favoritos",
    });
  }
  function handlerAddInPokedex(id: number) {
    setIsOnMyPokedex({
      state: !isOnMyPokedex.state,
      text: "Na Pokedêx",
    });
  }

  useEffect(() => {
    const pokemon = items.find((item) => item.id == params.id);
    return setPokemon(pokemon ? pokemon : {});
  }, [pokemon]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Header>
            <TouchableOpacity onPress={() => goBack()}>
              <Icon name="arrow-back" size={20} color={theme.colors.black} />
            </TouchableOpacity>
            <PokemonName>{pokemon.name}</PokemonName>
            <View></View>
          </Header>
          <Image
            source={{
              uri: pokemon.imageUrl,
            }}
            style={{ width: 200, height: 200, margin: 20 }}
          />

          <Actions>
            <Button onPress={() => handlerAddInPokedex(params.id)}>
              <Icon
                name="collections-bookmark"
                size={20}
                color={isOnMyFavoritesPokedexExpression}
              />
              <ButtonText color={isOnMyFavoritesPokedexExpression}>
                {isOnMyPokedex.text}
              </ButtonText>
            </Button>
            <Divisor />
            <Button onPress={() => handlerAddInFavorites(params.id)}>
              <Icon
                name="favorite"
                size={20}
                color={isOnMyFavoritesExpression}
              />
              <ButtonText color={isOnMyFavoritesExpression}>
                {isOnMyFavorites.text}
              </ButtonText>
            </Button>
          </Actions>

          <Card>
            <CardTitle>Peso: 84kg</CardTitle>
            <CardTitle>Status</CardTitle>
            <CardSubtitle>Nome: {pokemon.name}</CardSubtitle>
            <CardSubtitle>Valor: 100</CardSubtitle>
          </Card>

          <SectionTitle>Habilidades</SectionTitle>
          <SkillsContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {pokemon.types?.map((type, index) => (
              <Skill key={index}>
                <SkillLabel>{type}</SkillLabel>
                <SkillLabel>{type}</SkillLabel>
              </Skill>
            ))}
          </SkillsContainer>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PokemonDetails;
