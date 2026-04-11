import { createContext, useContext, useState, ReactNode } from "react";
import { CartItem } from "./CartContext";

export interface Order {
  id: string;
  items: CartItem[];
  totalPrice: number;
  date: string;
  status: "pending" | "confirmed" | "shipped" | "delivered";
}

interface OrderContextType {
  orders: Order[];
  addOrder: (items: CartItem[], totalPrice: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("blossom-orders");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const addOrder = (items: CartItem[], totalPrice: number) => {
    const newOrder: Order = {
      id: `order-${Date.now()}`,
      items,
      totalPrice,
      date: new Date().toISOString(),
      status: "confirmed",
    };
    setOrders((prev) => {
      const updated = [newOrder, ...prev];
      localStorage.setItem("blossom-orders", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrders must be used within OrderProvider");
  return ctx;
};