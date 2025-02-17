import { HStack, Stack, Image } from "@chakra-ui/react";
import products from "./data/products";

export const ProductList = () => {
  {
    JSON.stringify(products);
  }

  return (
    <Stack>
      {products.map((product) => {
        <HStack>
          <Image src={product.img} alt="Product image" />
          <HStack>
            <Text>{product.brand}</Text>
            <Heading>{product.name}</Heading>
            <Flex maxW="300px">
              <Text lineClamp="2">{product.description}</Text>
            </Flex>
            <Text>{product.price}</Text>
          </HStack>
        </HStack>;
      })}
    </Stack>
  );
};
