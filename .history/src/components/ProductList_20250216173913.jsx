import { HStack, Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import products from "../data/products";

export const ProductList = () => {
  return (
    <Stack>
      {products.map((product) => (
        <HStack key={product.id} maxW={230}>
          <Image src={product.img} alt="Product image" />
          <Stack>
            <Text>{product.brand}</Text>
            <Heading>{product.name}</Heading>
            <Flex maxW="240px">
              <Text lineClamp="2">{product.description}</Text>
            </Flex>
            <Text>{product.price}</Text>
          </Stack>
        </HS>
      ))}
    </Stack>
  );
};
