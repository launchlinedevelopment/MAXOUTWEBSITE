import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { allProducts, getProduct } from "@/lib/drop";
import BuyPanel from "@/components/buy-panel";
import CartLink from "@/components/cart-link";

export function generateStaticParams(){return allProducts.map((p)=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product)return {};
  return {title:product.name,description:product.statement+" Shop "+product.name+" from the MAXOUT BLACKOUT drop."};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product)notFound();

  return <main className="productPage">
    <nav className="nav shell"><Link className="mark" href="/">MAX<span>OUT</span></Link><div className="pdpNav"><Link href="/#drop">← BACK TO DROP</Link><CartLink/></div></nav>
    <section className="pdp shell">
      <div className="pdpVisual">
        <span className="pdpNumber">{product.number}</span>
        {product.image ? <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 900px) 100vw, 65vw" className="pdpImage"/> : <div className="pdpGhost">MAXOUT</div>}
        <span className="pdpAccent">{product.accent}</span>
      </div>
      <div className="pdpDetails">
        <p className="kicker">{product.collection.toUpperCase()} / {product.number}</p>
        <h1>{product.name}</h1>
        <p className="pdpStatement">{product.statement}</p>
        <div className="pdpPrice">{product.originalPrice && <del>{"$"+product.originalPrice.toFixed(2)}</del>} {"$"+product.price.toFixed(2)}</div>
        <BuyPanel product={product}/>
        <div className="detailRows">
          <p><span>FIT</span><span>{product.accent}</span></p>
          <p><span>DROP</span><span>{product.collection.toUpperCase()} 2026</span></p>
          <p><span>SHIPPING</span><span>CALCULATED AT CHECKOUT</span></p>
        </div>
      </div>
    </section>
  </main>
}