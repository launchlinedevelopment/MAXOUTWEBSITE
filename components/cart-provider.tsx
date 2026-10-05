"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem={slug:string;name:string;price:number;size:string;qty:number};
type CartContextValue={items:CartItem[];count:number;subtotal:number;add:(item:Omit<CartItem,"qty">)=>void;remove:(slug:string,size:string)=>void;changeQty:(slug:string,size:string,qty:number)=>void;clear:()=>void};

const CartContext=createContext<CartContextValue|null>(null);

export function CartProvider({children}:{children:React.ReactNode}){
  const [items,setItems]=useState<CartItem[]>([]);
  useEffect(()=>{const raw=localStorage.getItem("maxout-cart");if(raw){try{setItems(JSON.parse(raw))}catch{}}},[]);
  useEffect(()=>{localStorage.setItem("maxout-cart",JSON.stringify(items))},[items]);

  function add(item:Omit<CartItem,"qty">){
    setItems(current=>{
      const idx=current.findIndex(x=>x.slug===item.slug&&x.size===item.size);
      if(idx===-1)return [...current,{...item,qty:1}];
      return current.map((x,i)=>i===idx?{...x,qty:x.qty+1}:x);
    });
  }
  function remove(slug:string,size:string){setItems(x=>x.filter(i=>!(i.slug===slug&&i.size===size)))}
  function changeQty(slug:string,size:string,qty:number){if(qty<1)return remove(slug,size);setItems(x=>x.map(i=>i.slug===slug&&i.size===size?{...i,qty}:i))}
  function clear(){setItems([])}

  const value=useMemo(()=>({items,count:items.reduce((s,i)=>s+i.qty,0),subtotal:items.reduce((s,i)=>s+i.price*i.qty,0),add,remove,changeQty,clear}),[items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(){
  const ctx=useContext(CartContext);
  if(!ctx)throw new Error("useCart must be used inside CartProvider");
  return ctx;
}