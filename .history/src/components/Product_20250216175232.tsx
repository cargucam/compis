import { Heading, Stack, Image, Text, Flex } from "@chakra-ui/react";
import type { ProductType } from "../types/types";

export const Product = (proudct: ProductType) => (
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
