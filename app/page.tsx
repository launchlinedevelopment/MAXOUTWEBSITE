import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart-link";
import { archiveCollections } from "@/lib/drop";
import styles from "./home.module.css";

const america = archiveCollections.find((c) => c.slug === "america");
const core = archiveCollections.find((c) => c.slug === "core");
const coreHoodie = core?.products.find((p) => p.slug === "maxout-core-hoodie");
const accessory = core?.products.find((p) => p.slug === "maxout-core-shaker");
const women = core?.products.find((p) => p.slug === "maxout-core-leggings");

export default function Home(){
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">MAXOUT</Link>
        <nav className={styles.nav}>
          <Link href="/collections/core">SHOP</Link>
          <Link href="/collections/america">DROPS</Link>
          <a href="#collection">COLLECTION</a>
          <CartLink/>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroArt}>
          {america?.image && <Image src={america.image} alt="MAXOUT America Drop" fill priority sizes="100vw" className={styles.heroBase}/>}
          {america?.products[2]?.image && <Image src={america.products[2].image} alt="" width={720} height={960} className={styles.heroOverlayImage}/>}
        </div>
        <div className={styles.heroText}>
          <h1>AMERICA DROP IS HERE</h1>
          <p>Limited Stock</p>
          <Link href="/collections/america">Shop Now</Link>
        </div>
      </section>

      <section className={styles.statement}>
        <h2>Built for More, Clothing built to last.</h2>
        <p>Essential pieces. Worn on repeat.</p>
        <Link href="/collections/core">Shop All</Link>
      </section>

      <section className={styles.collectionIntro} id="collection">
        <p>Explore our latest arrivals in men woman and accessories.</p>
        <h2>The Collection</h2>
      </section>

      <section className={styles.collectionGrid}>
        <Link href="/collections/core" className={styles.collectionCard}>
          <div className={styles.collectionImage}>
            {coreHoodie?.image && <Image src={coreHoodie.image} alt="Shop Men" fill sizes="(max-width:900px) 100vw, 33vw"/>}
          </div>
          <span>Shop Men</span>
        </Link>

        <Link href="/collections/core" className={styles.collectionCard}>
          <div className={styles.collectionImage}>
            {accessory?.image && <Image src={accessory.image} alt="Shop Accessories" fill sizes="(max-width:900px) 100vw, 33vw"/>}
          </div>
          <span>Shop Accessories</span>
        </Link>

        <Link href="/collections/core" className={styles.collectionCard}>
          <div className={styles.collectionImage}>
            {women?.image && <Image src={women.image} alt="Shop Women" fill sizes="(max-width:900px) 100vw, 33vw"/>}
          </div>
          <span>Shop Women</span>
        </Link>
      </section>

      <section className={styles.join}>
        <div>
          <h2>Join the List</h2>
          <p>Early access, private sales, and the latest from our studio, straight to your inbox.</p>
        </div>
        <form className={styles.form}>
          <label htmlFor="email">Email address*</label>
          <input id="email" type="email" placeholder="Enter your email"/>
          <label className={styles.check}><input type="checkbox"/> <span>Yes, I agree to receive marketing emails.*</span></label>
          <button type="button">Join Now</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>© 2026 by MAXOUT</div>
        <div><span>Shop</span></div>
        <div><span>Help</span><a href="mailto:themaxoutshop@gmail.com">Contact Us</a></div>
        <div><span>Legal</span><a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a><a href="#">Refund Policy</a><a href="#">Accessibility Statement</a></div>
      </footer>
    </main>
  );
}
