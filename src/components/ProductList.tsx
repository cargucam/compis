import React from "react";
import { Heading, SimpleGrid, Tag, Text, HStack } from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";

export const ProductList = ({ searchTerm }: { searchTerm: string }) => {
  const hasSearch = searchTerm.length > 0;

  const filteredProducts = hasSearch
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  return (
    <>
      <HStack alignContent="center" justifyContent="space-between" mt={12}>
        <Heading>Produkter</Heading>{" "}
        {hasSearch && (
          <Text>
            Søkt på:
            <Tag.Root variant={"surface"} ml={2} mt="2px">
              <Tag.Label>{searchTerm}</Tag.Label>
            </Tag.Root>
          </Text>
        )}
      </HStack>

      <SimpleGrid minChildWidth="220px" gap="6" my={4}>
        {filteredProducts.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
};
