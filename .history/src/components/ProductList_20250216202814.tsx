import React from "react";
import {
  SimpleGrid,
} from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";
import { useState, useEffect } from 'react'


export const ProductList = ({searchTerm}: {searchItem:string}) => {

  const [filteredUsers, setFilteredUsers] = useState([])

  // filter the items using the apiUsers state
    
  }

  useEffect(() => {
   filteredProducts = searchTerm.length === 0 ? products : products((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
     

    const filteredProducts = apiUsers.

    setFilteredUsers filteredProducts);
  }, [searchTerm])


  return (
    <>
    {searchTerm}

   

    <SimpleGrid  minChildWidth="220px" gap="6" my={12}>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </SimpleGrid>
    </>
  );
};
