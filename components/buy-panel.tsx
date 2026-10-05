"use client";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/drop";

export default function BuyPanel({product}:{product:Product}){
  const [size,setSize]=useState("M");
  const [added,setAdded]=useState(false);
  const {add}=useCart();
  return <>
    <div className="sizeLabel"><span>SELECT SIZE</span><span>SIZE GUIDE</span></div>
    <div className="sizes">{["S","M","L","XL","2XL"].map((s)=><button className={size===s?"selected":""} onClick={()=>setSize(s)} key={s}>{s}</button>)}</div>
    <button className="addButton" onClick={()=>{add({slug:product.slug,name:product.name,price:product.price,size});setAdded(true);setTimeout(()=>setAdded(false),1400)}}>{added?"ADDED TO BAG ✓":"ADD TO BAG — $"+product.price}</button>
  </>;
}