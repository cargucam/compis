import { HStack, Stack, Image } from "@chakra-ui/react";
import products from "./data/products";

export const ProductList = () => {
  {
    JSON.stringify(products);
  }
  {products.map((product)=> 
  {<HStack>
    <Image src={product.img} alt="Product image" />
  </HStack>;
    })

  }}
  <HStack>
    <Image src=""
  </HStack>;
  return <Stack></Stack>;
};
