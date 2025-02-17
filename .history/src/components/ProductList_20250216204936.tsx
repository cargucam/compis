import React from "react";
import {
  SimpleGrid,
  Tag, 
  Text
} from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";
import { useState, useEffect } from 'react'
import type { ProductType } from "../types/types";



export const ProductList = ({searchTerm}: {searchTerm: string}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  


  useEffect(() => {
   const _filteredProducts = searchTerm.length === 0 ? products : products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
     
    setFilteredProducts(_filteredProducts);
  }, [searchTerm])


  return (
    <>
    <Text>Søkt på: 
      <Tag.Root variant={"surface"}>
        <Tag.Label>Gray</Tag.Label>
        <Tag.EndElement>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
      </Text>
    <SimpleGrid  minChildWidth="220px" gap="6" my={12}>
      {filteredProducts.map((product) => (
        <Product {...product} />
      ))}
    </SimpleGrid>
    </>
  );
};
