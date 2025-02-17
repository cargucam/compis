import { HStack, Stack, Image } from "@chakra-ui/react";
import products from "./data/products";

export const ProductList = () => {
  {
    JSON.stringify(products);
  }

  return (
    <Stack>
      {products.map((product) => {
        <HStack>
          <Image src={product.img} alt="Product image" />
        </HStack>;
      })}
      }
    </Stack>
  );
};
