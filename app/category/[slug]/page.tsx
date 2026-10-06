import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CartLink from "@/components/cart-link";
import { allProducts } from "@/lib/drop";
import styles from "./category.module.css";

const categories = {
  "all-products": { title:"All Products", slugs: allProducts.filter(p=>p.collection!=="blackout").map(p=>p.slug) },
  "men": { title:"Men", slugs:[
    "maxout-america-tee","maxout-america-sweatpants","maxout-summer-shorts","maxout-summer-tank","maxout-summer-tee",
    "maxout-apex-tee","maxout-core-hoodie","maxout-core-compression-shirt","maxout-core-long-sleeve","maxout-apex-hoodie",
    "maxout-core-joggers","maxout-core-tee","maxout-core-muscle-tank","maxout-core-pants","maxout-core-shorts"
  ]},
  "women": { title:"Women", slugs:[
    "maxout-core-sports-bra","maxout-core-hoodie","maxout-core-racerback-tank","maxout-core-leggings","maxout-america-sports-bra","maxout-america-crop-top"
  ]},
  "accessories": { title:"Accessories", slugs:["maxout-core-shaker"] }
} as const;

export function generateStaticParams(){return Object.keys(categories).map(slug=>({slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const cat=categories[slug as keyof typeof categories];
  if(!cat)return {};
  return {title:cat.title+" | MAXOUT",description:"Shop "+cat.title+" from MAXOUT."};
}

export default async function CategoryPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const cat=categories[slug as keyof typeof categories];
  if(!cat)notFound();
  const products=cat.slugs.map(s=>allProducts.find(p=>p.slug===s)).filter(Boolean);

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

    <div className={styles.shell}>
      <aside className={styles.browse}>
        <h2>Browse by</h2>
        <Link className={slug==="all-products"?styles.active:""} href="/category/all-products">All Products</Link>
        <Link className={slug==="men"?styles.active:""} href="/category/men">Men</Link>
        <Link className={slug==="women"?styles.active:""} href="/category/women">Women</Link>
        <Link className={slug==="accessories"?styles.active:""} href="/category/accessories">Accessories</Link>
      </aside>

      <section className={styles.content}>
        <h1>{cat.title}</h1>
        <div className={styles.toolbar}>
          <span>{products.length} products</span>
          <label>Sort by:
            <select defaultValue="recommended"><option value="recommended">Recommended</option></select>
          </label>
        </div>

        <div className={styles.grid}>
          {products.map(product=>product && <Link className={styles.card} href={"/product-page/"+product.slug} key={product.slug}>
            <div className={styles.image}>
              {product.image ? <Image src={product.image} alt={product.name} fill sizes="(max-width:900px) 50vw, 25vw"/> : <span>MAXOUT</span>}
              {product.originalPrice && <b>SUMMER SALE</b>}
            </div>
            <button type="button">Add to Cart</button>
            <div className={styles.meta}>
              <h3>{product.name}</h3>
              <p>{product.originalPrice && <del>{"$"+product.originalPrice.toFixed(2)}</del>} {"$"+product.price.toFixed(2)}</p>
            </div>
          </Link>)}
        </div>
      </section>
    </div>

    <section className={styles.join}>
      <div><h2>Join the List</h2><p>Early access, private sales, and the latest from our studio, straight to your inbox.</p></div>
      <form className={styles.form}>
        <label htmlFor="email">Email address*</label>
        <input id="email" type="email" placeholder="Enter your email"/>
        <label className={styles.check}><input type="checkbox"/><span>Yes, I agree to receive marketing emails.*</span></label>
        <button type="button">Join Now</button>
      </form>
    </section>

    <footer className={styles.footer}>
      <div>© 2026 by MAXOUT</div>
      <div><span>Shop</span><Link href="/category/all-products">All Products</Link><Link href="/category/women">Women</Link><Link href="/category/men">Men</Link><Link href="/category/accessories">Accessories</Link></div>
      <div><span>Help</span><a href="mailto:themaxoutshop@gmail.com">Contact Us</a></div>
      <div><span>Legal</span><a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a><a href="#">Refund Policy</a><a href="#">Accessibility Statement</a></div>
    </footer>
  </main>
}