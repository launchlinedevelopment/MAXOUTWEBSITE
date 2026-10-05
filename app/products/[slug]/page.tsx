import Link from "next/link";
import { notFound } from "next/navigation";
import { activeDrop } from "@/lib/drop";

export function generateStaticParams(){return activeDrop.products.map((p)=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=activeDrop.products.find((p)=>p.slug===slug);
  if(!product)return {};
  return {title:product.name,description:product.statement+" Shop "+product.name+" from the MAXOUT BLACKOUT drop."};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=activeDrop.products.find((p)=>p.slug===slug);
  if(!product)notFound();

  return <main className="productPage">
    <nav className="nav shell"><Link className="mark" href="/">MAX<span>OUT</span></Link><Link href="/#drop">← BACK TO DROP</Link></nav>
    <section className="pdp shell">
      <div className="pdpVisual"><span className="pdpNumber">{product.number}</span><div className="pdpGhost">MAXOUT</div><span className="pdpAccent">{product.accent}</span></div>
      <div className="pdpDetails">
        <p className="kicker">BLACKOUT / {product.number}</p>
        <h1>{product.name}</h1>
        <p className="pdpStatement">{product.statement}</p>
        <div className="pdpPrice">{"$"+product.price+".00"}</div>
        <div className="sizeLabel"><span>SELECT SIZE</span><span>SIZE GUIDE</span></div>
        <div className="sizes">{["S","M","L","XL","2XL"].map((size)=><button key={size}>{size}</button>)}</div>
        <button className="addButton">ADD TO BAG — {"$"+product.price}</button>
        <div className="detailRows">
          <p><span>FIT</span><span>{product.accent}</span></p>
          <p><span>DROP</span><span>BLACKOUT 2026</span></p>
          <p><span>SHIPPING</span><span>CALCULATED AT CHECKOUT</span></p>
        </div>
      </div>
    </section>
  </main>
}