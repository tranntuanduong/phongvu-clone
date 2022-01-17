import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode
}

export interface Item {
  productId: string,
  quantity: number,
  name: string,
  sku: string,
  price: number;
  thumb: string
}

export type Cart = Record<string, Item>;

interface CartContext {
  cartList: Cart;
  handleChangeQuantityItem: (id: string, quantity: number) => void;
}



export const CartContext = createContext<CartContext>({
  cartList: {},
  handleChangeQuantityItem: () => { }
})

const CartContextProvider = (props: Props) => {
  const { children } = props;
  const [cartList, setcartList] = useState<Cart>({
    "cart1": {
      productId: "pd-1",
      thumb: "/access/products/manhinh/screen1.jpg",
      name: "Chuột không dây Logitech MX Master 3 (Đen)",
      sku: "201201647",
      price: 50000,
      quantity: 5,
    },
    "cart2": {
      productId: "pd-2",
      thumb: "/access/products/dongho/dongho1.jpg",
      name: "Chuột không dây Logitech MX Master 3 (Đen)",
      sku: "201201647",
      price: 200000,
      quantity: 3,
    },
    "cart3": {
      productId: "pd-3",
      thumb: "/access/products/giadung/giadung1.jpg",
      name: "Laptop Dell Vostro 15 3510 V5I33 Laptop Dell Vostro 15 3510 V5I33 Laptop Dell Vostro 15 3510 V5I33 Laptop Dell Vostro 15 3510 V5I33",
      sku: "201201647",
      price: 100000,
      quantity: 2,
    }
  });

  const handleChangeQuantityItem = (id: string, quantity: number) => {
    if (cartList[id].quantity === 0 && quantity < 0) {

    } else {
      cartList[id].quantity += quantity;
    }
    setcartList({
      ...cartList,
    })
  }

  const value = {
    cartList: cartList,
    handleChangeQuantityItem: handleChangeQuantityItem
  }


  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;