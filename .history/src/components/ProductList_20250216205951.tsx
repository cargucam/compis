import React from "react";
import {
  SimpleGrid,
  Tag, 
  Text, 
  HStack
} from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";
import { useState, useEffect } from 'react'

export const ProductList = ({searchTerm}: {searchTerm: string}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const hasSearch = searchTerm.length > 0;

  useEffect(() => {
   const _filteredProducts = hasSearch ? products : products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
     
    setFilteredProducts(_filteredProducts);
  }, [searchTerm])


  return (
    <>
      {hasSearch && (
        <HStack alignContent="center">
          <Text my={12}>Søkt på: 
            <Tag.Root variant={"surface"} ml={4}>
              <Tag.Label >{searchTerm}</Tag.Label>
              <Tag.EndElement>
                <Tag.CloseTrigger />
              </Tag.EndElement>
            </Tag.Root>
          </Text>
        </HStack>
      )}

      <SimpleGrid  minChildWidth="220px" gap="6" my={12}>
        {filteredProducts.map((product) => (
          <Product {...product} />
        ))}
      </SimpleGrid>
    </>
  );
};
