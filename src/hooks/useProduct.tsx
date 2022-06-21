import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

interface Products {
  id: string;
  items: {
    product: {
      name: string;
      imageObjects: [
        {
          thumbnail: string;
        }
      ];
      priceSpecification: {
        price: number;
      };
    };
  }[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

interface Card {
  number: string;
  name: string;
  validity: string;
  cvv: string;
}

interface ProductContextData {
  products: Products;
  card: Card;
  setCard: React.Dispatch<React.SetStateAction<Card>>;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState({} as Products);
  const [card, setCard] = useState<Card>({
    cvv: "",
    name: "",
    validity: "",
    number: "",
  });

  const endpoint = "http://www.mocky.io/v2/5b15c4923100004a006f3c07";

  useEffect(() => {
    async function getData() {
      await axios.get(endpoint).then((res) => setProducts(res.data));
    }

    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, card, setCard }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}
