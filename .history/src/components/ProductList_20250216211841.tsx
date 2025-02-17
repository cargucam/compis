import React from "react";
import { SimpleGrid, Tag, Text, HStack } from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";
import { useState, useEffect } from "react";

export const ProductList = ({ searchTerm }: { searchTerm: string }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const hasSearch = searchTerm.length > 0;

  useEffect(() => {
    const _filteredProducts = hasSearch
      ? products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products;

    setFilteredProducts(_filteredProducts);
  }, [searchTerm]);

  return (
    <>
      <HStack alignContent="center">
        <Text my={8}>
          Søkt på:
          {hasSearch && (
            <Tag.Root variant={"surface"} ml={2} mt={1}>
              <Tag.Label>{searchTerm}</Tag.Label>
              <Tag.EndElement>
                <Tag.CloseTrigger />
              </Tag.EndElement>
            </Tag.Root>
          )}
        </Text>
      </HStack>

      <SimpleGrid minChildWidth="220px" gap="6" my={12}>
        {filteredProducts.map((product, index) => (
          <Product {...product} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
};
