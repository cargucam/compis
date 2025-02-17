import React from "react";
import {
  SimpleGrid,
} from "@chakra-ui/react";
import products from "../data/products";
import Product from "./Product";

export const ProductList = ({searchItem}: {searchItem:string}) => {

  const [filteredUsers, setFilteredUsers] = useState([])
  {searchItem}

  const handleInputChange = (e) => { 
  const searchTerm = e.target.value;
  setSearchItem(searchTerm)
  return (
    

    // filter the items using the apiUsers state
    const filteredItems = apiUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

    <SimpleGrid  minChildWidth="220px" gap="6" my={12}>
      {products.map((product) => (
        <Product {...product} />
      ))}
    </SimpleGrid>
  );
};
