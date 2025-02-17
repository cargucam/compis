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
import Product from "./product";

export const ProductList = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6" my={12}>
      {products.map((product) => (
        <Product {...product}>
        </Stack>
      ))}
    </Grid>
  );
};
