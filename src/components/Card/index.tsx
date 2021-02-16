import React, { useState } from "react";
import { View, Text } from "react-native";
import { theme } from "../../theme";

import {
  CardBody,
  CardFooter,
  CardFooterElement,
  CardTitle,
  CardImage,
  Container,
  CardFooterLabel,
} from "./style";

interface CardProps {
  name: string;
  types: string[];
  imageUrl: string;
  isOnSearch?: boolean;
  isOnMyPokemons?: boolean;
}

function Card({
  name,
  types,
  imageUrl,
  isOnSearch,
  isOnMyPokemons,
}: CardProps) {
  return (
    <Container>
      <CardImage
        source={{
          uri: imageUrl,
        }}
      />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardFooter horizontal={true} showsHorizontalScrollIndicator={false}>
          {types.map((type, index) => (
            <CardFooterElement key={index} color={theme.colors.red}>
              <CardFooterLabel>{type}</CardFooterLabel>
            </CardFooterElement>
          ))}
        </CardFooter>
      </CardBody>
    </Container>
  );
}

export default Card;
