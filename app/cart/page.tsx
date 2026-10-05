"use client";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";

export default function CartPage(){
  const {items,subtotal,changeQty,remove}=useCart();
  return <main>
    <nav className="nav shell"><Link className="mark" href="/">MAX<span>OUT</span></Link><Link href="/">CONTINUE SHOPPING →</Link></nav>
    <section className="cartPage shell">
      <div className="kicker">[ YOUR BAG ]</div>
      <h1>CART / {items.reduce((s,i)=>s+i.qty,0)}</h1>
      {items.length===0?<div className="emptyCart"><p>YOUR BAG IS EMPTY.</p><Link className="addButton shopButton" href="/#drop">SHOP BLACKOUT</Link></div>:
      <div className="cartLayout">
        <div className="cartItems">{items.map(item=><article className="cartRow" key={item.slug+item.size}>
          <div className="cartThumb">MAXOUT</div>
          <div className="cartMain"><h2>{item.name}</h2><p>SIZE {item.size}</p><button onClick={()=>remove(item.slug,item.size)}>REMOVE</button></div>
          <div className="qty"><button onClick={()=>changeQty(item.slug,item.size,item.qty-1)}>−</button><span>{item.qty}</span><button onClick={()=>changeQty(item.slug,item.size,item.qty+1)}>+</button></div>
          <strong>{"$"+(item.price*item.qty).toFixed(2)}</strong>
        </article>)}</div>
        <aside className="summary">
          <div><span>SUBTOTAL</span><strong>{"$"+subtotal.toFixed(2)}</strong></div>
          <p>Shipping and taxes calculated at checkout.</p>
          <button className="addButton" disabled>CHECKOUT — COMING NEXT</button>
          <small>Stripe checkout will be connected after live product and fulfillment IDs are verified.</small>
        </aside>
      </div>}
    </section>
  </main>
}