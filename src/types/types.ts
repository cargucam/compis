export type ProductType
 = {
  brand: string
  description: string
  id: string
  img: string
  name: string
  price: string
}

 export type HeaderType = {
  setSearchTerm: (seachTerm : string) => void
}