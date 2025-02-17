import React from "react";
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
import Product from "./Product";
import { ProductType } from "../types/types";

export const ProductList = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="6" my={12}>
      {products.map((product : ProductType) => (
        <Product product={product} />
        </Stack>
      ))}
    </Grid>
  );
};
