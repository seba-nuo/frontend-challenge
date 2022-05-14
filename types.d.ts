export interface productsProps {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: [
    installementsProps
  ] | never[];
}[] | null;

export interface installementsProps {
  value: number;
  quantity: number;
}