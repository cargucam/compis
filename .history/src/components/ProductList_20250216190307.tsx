import React from "react";
import {
  SimpleGrid,
} from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";

export const ProductList = () => {
  return (
    <SimpleGrid  minChildWidth="220px" gap="6" my={12}>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </SimpleGrid>
  );
};
