import React from "react";
import {
  Heading,
  HStack,
  Stack,
  Image,
  IconButton,
  Text,
  Flex,
} from "@chakra-ui/react";
import type { ProductType } from "../types/types";
import { PiShoppingCartBold } from "react-icons/pi";

const Product = ({ id, brand, name, description, img, price }: ProductType) => (
  <Stack key={id} maxW={410} border="1px solid #999" p={4}>
    <Image src={img} alt="Product image" />
    <Stack>
      <Text>{brand}</Text>
      <Heading minH="60px">{name}</Heading>
      <Flex maxW="240px">
        <Text lineClamp="2">{description}</Text>
      </Flex>
      <HStack justifyContent="space-between">
        <Text fontWeight="bold">{price}</Text>
        <IconButton
          variant="outline"
          size="sm"
          borderColor="#d5d5d5"
          h="40px"
          w="40px"
        >
          <PiShoppingCartBold />
        </IconButton>
      </HStack>
    </Stack>
  </Stack>
);

export default Product;
