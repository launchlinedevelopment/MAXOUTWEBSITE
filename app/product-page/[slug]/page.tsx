import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CartLink from "@/components/cart-link";
import { allProducts, getProduct } from "@/lib/drop";
import ProductPurchase from "./product-purchase";
import styles from "./product.module.css";

export function generateStaticParams(){return allProducts.map(p=>({slug:p.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product)return {};
  return {title:product.name+" | MAXOUT",description:product.statement};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product)notFound();

  return <main className={styles.page}>
    <header className={styles.header}>
      <Link className={styles.logo} href="/">MAXOUT</Link>
      <nav className={styles.nav}>
        <Link href="/category/all-products">All Products</Link>
        <Link href="/category/women">Women</Link>
        <Link href="/category/men">Men</Link>
        <Link href="/category/accessories">Accessories</Link>
        <CartLink/>
      </nav>
    </header>

    <section className={styles.product}>
      <div className={styles.gallery}>
        <div className={styles.mainImage}>
          {product.image ? <Image src={product.image} alt={product.name} fill priority sizes="(max-width:900px) 100vw, 55vw"/> : <span>MAXOUT</span>}
        </div>
        {product.image && <div className={styles.thumbs}>
          {[0,1,2,3].map(i=><div className={styles.thumb} key={i}><Image src={product.image!} alt={product.name+" view "+(i+1)} fill sizes="120px"/></div>)}
        </div>}
      </div>

      <div className={styles.details}>
        <h1>{product.name}</h1>
        <div className={styles.price}>{product.originalPrice && <del>{"$"+product.originalPrice.toFixed(2)}</del>}<span>{"$"+product.price.toFixed(2)}</span> <small>Price</small></div>
        <ProductPurchase product={product}/>
        <div className={styles.description}>
          <p>{product.statement}</p>
          {product.slug==="maxout-america-tee" && <>
            <p>Built for comfort. Designed to represent. The MAXOUT America Tee combines a timeless fit with a bold distressed American flag graphic, creating a clean patriotic look that stands out without trying too hard.</p>
            <p>Made from premium heavyweight 100% cotton, this tee delivers a soft feel with a structured fit that holds its shape wear after wear.</p>
            <h2>Features</h2>
            <ul>
              <li>Distressed MAXOUT America graphic</li>
              <li>Premium heavyweight 100% cotton</li>
              <li>Relaxed unisex fit</li>
              <li>Soft, breathable feel</li>
              <li>Built for everyday wear, training, and recovery</li>
            </ul>
          </>}
        </div>
      </div>
    </section>

    <section className={styles.join}>
      <div><h2>Join the List</h2><p>Early access, private sales, and the latest from our studio, straight to your inbox.</p></div>
      <form className={styles.form}><label htmlFor="email">Email address*</label><input id="email" type="email" placeholder="Enter your email"/><label className={styles.check}><input type="checkbox"/><span>Yes, I agree to receive marketing emails.*</span></label><button type="button">Join Now</button></form>
    </section>

    <footer className={styles.footer}>
      <div>© 2026 by MAXOUT</div>
      <div><span>Shop</span><Link href="/category/all-products">All Products</Link><Link href="/category/women">Women</Link><Link href="/category/men">Men</Link><Link href="/category/accessories">Accessories</Link></div>
      <div><span>Help</span><a href="mailto:themaxoutshop@gmail.com">Contact Us</a></div>
      <div><span>Legal</span><a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a><a href="#">Refund Policy</a><a href="#">Accessibility Statement</a></div>
    </footer>
  </main>
}