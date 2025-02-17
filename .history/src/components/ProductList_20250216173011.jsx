import { HStack, Stack, Image, Text, Flex } from "@chakra-ui/react";
import products from "../data/products";

export const ProductList = () => {
  {
    JSON.stringify(products);
  }

  return (
    <Stack>
      {products.map((product) => {
        <HStack key={product.id}>
          <Image src={product.img} alt="Product image" />
          <HStack>
            <Text>{product.brand}</Text>
            <Heading>{product.name}</Heading>
            <Flex maxW="240px">
              <Text lineClamp="2">{product.description}</Text>
            </Flex>
            <Text>{product.price}</Text>
          </HStack>
        </HStack>;
      })}
    </Stack>
  );
};
