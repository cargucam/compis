import React from "react";
import {
  SimpleGrid,
} from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";
import { useState, useEffect } from 'react'


export const ProductList = ({searchItem}: {searchItem:string}) => {

  const [filteredUsers, setFilteredUsers] = useState([])

  // filter the items using the apiUsers state
    
  }

  useEffect(() => {
if(searchItem.length === 0){
  return
}

    const filteredItems = apiUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }, [searchItem])


  return (
    <>
    {searchItem}

   

    <SimpleGrid  minChildWidth="220px" gap="6" my={12}>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </SimpleGrid>
    </>
  );
};
