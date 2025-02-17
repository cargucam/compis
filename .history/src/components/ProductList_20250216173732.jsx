import { HStack, Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import products from "../data/products";

export const ProductList = () => {
  return (
    <Stack>
      {products.map((product) => (
        <HStack key={product.id}>
          <p>{proudct.name}</p>
        </HStack>
      ))}
    </Stack>
  );
};
