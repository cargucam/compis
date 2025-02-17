import { Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import type { Product } from "./types/types.ts"

type ProductType
 = {
  id: string
  name: string
  brand: string
  price: string
  img: string
}

export const Product = (proudct: Product) => (
  <Stack key={product.id} maxW={410} border="1px solid #999" p={4}>
    <Image src={product.img} alt="Product image" />
    <Stack>
      <Text>{product.brand}</Text>
      <Heading>{product.name}</Heading>
      <Flex maxW="240px">
        <Text lineClamp="2">{product.description}</Text>
      </Flex>
      <Text>{product.price}</Text>
    </Stack>
  </Stack>
);
