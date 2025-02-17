import {
  HStack,
  Heading,
  Stack,
  Image,
  Text,
  Flex,
  Grid,
} from "@chakra-ui/react";
import products from "../data/products";

export const ProductList = () => {
  return (
    <Grid>
      {products.map((product) => (
        <Stack key={product.id} maxW={230} border="1px solid #999">
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
      ))}
    </Grid>
  );
};
