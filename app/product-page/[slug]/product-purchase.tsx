"use client";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/drop";
import styles from "./product.module.css";

export default function ProductPurchase({product}:{product:Product}){
  const sizes=product.sizes?.length?product.sizes:["S","M","L","XL","2XL"];
  const colors=product.colors?.length?product.colors:[];
  const [size,setSize]=useState(sizes[0]||"");
  const [color,setColor]=useState(colors[0]||"");
  const [qty,setQty]=useState(1);
  const [added,setAdded]=useState(false);
  const {add}=useCart();

  function addToCart(){
    for(let i=0;i<qty;i++) add({slug:product.slug,name:product.name,price:product.price,size:color?size+" / "+color:size});
    setAdded(true);
    setTimeout(()=>setAdded(false),1200);
  }

  return <div className={styles.purchase}>
    <div className={styles.optionBlock}>
      <label>Size*</label>
      <div className={styles.options}>{sizes.map(s=><button type="button" className={size===s?styles.selected:""} onClick={()=>setSize(s)} key={s}>{s}</button>)}</div>
    </div>

    {colors.length>0 && <div className={styles.optionBlock}>
      <label>Color*</label>
      <div className={styles.options}>{colors.map(c=><button type="button" className={color===c?styles.selected:""} onClick={()=>setColor(c)} key={c}>{c}</button>)}</div>
    </div>}

    <div className={styles.quantity}>
      <label>Quantity*</label>
      <div><button type="button" onClick={()=>setQty(Math.max(1,qty-1))}>−</button><span>{qty}</span><button type="button" onClick={()=>setQty(qty+1)}>+</button></div>
    </div>

    <button className={styles.add} type="button" onClick={addToCart}>{added?"Added to Cart":"Add to Cart"}</button>
    <button className={styles.buy} type="button">Buy Now</button>
  </div>;
}