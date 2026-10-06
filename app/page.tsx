import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart-link";
import { archiveCollections } from "@/lib/drop";
import styles from "./home.module.css";

const core = archiveCollections.find((c) => c.slug === "core");
const coreHoodie = core?.products.find((p) => p.slug === "maxout-core-hoodie");
const accessory = core?.products.find((p) => p.slug === "maxout-core-shaker");
const women = core?.products.find((p) => p.slug === "maxout-core-leggings");

const heroBackground = "https://static.wixstatic.com/media/8255de_06d4a17a72a54f378299eefd86b5f5ff~mv2.png/v1/crop/x_0,y_46,w_2000,h_1072/fill/w_980,h_525,al_c,q_90,enc_auto/unisex-oversized-heavyweight-hoodie-vintage-black-front-69ea2cf73beab.png";
const heroOverlay = "https://static.wixstatic.com/media/8255de_46ca095df9194b7db0d25a0713924c4f~mv2.png/v1/fill/w_980,h_1307,al_c,q_90,enc_auto/image-v1523157514714288128_edited.png";

export default function Home(){
  return (
    <main className={styles.page}>
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

      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image src={heroBackground} alt="MAXOUT America Drop" fill priority sizes="100vw"/>
        </div>
        <Image src={heroOverlay} alt="" width={980} height={1307} className={styles.heroOverlay}/>
        <div className={styles.heroText}>
          <h1>AMERICA DROP IS HERE</h1>
          <p>Limited Stock</p>
          <Link href="/category/all-products">Shop Now</Link>
        </div>
      </section>

      <section className={styles.statement}>
        <h2>Built for More, Clothing built to last.</h2>
        <p>Essential pieces. Worn on repeat.</p>
        <Link href="/category/all-products">Shop All</Link>
      </section>

      <section className={styles.collectionIntro}>
        <p>Explore our latest arrivals in men woman and accessories.</p>
        <h2>The Collection</h2>
      </section>

      <section className={styles.collectionGrid}>
        <Link href="/category/men" className={styles.collectionCard}>
          <div className={styles.collectionImage}>
            {coreHoodie?.image && <Image src={coreHoodie.image} alt="Shop Men" fill sizes="(max-width:900px) 100vw, 33vw"/>}
          </div>
          <span>Shop Men</span>
        </Link>

        <Link href="/category/accessories" className={styles.collectionCard}>
          <div className={styles.collectionImage}>
            {accessory?.image && <Image src={accessory.image} alt="Shop Accessories" fill sizes="(max-width:900px) 100vw, 33vw"/>}
          </div>
          <span>Shop Accessories</span>
        </Link>

        <Link href="/category/women" className={styles.collectionCard}>
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
          <label className={styles.check}><input type="checkbox"/><span>Yes, I agree to receive marketing emails.*</span></label>
          <button type="button">Join Now</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>© 2026 by MAXOUT</div>
        <div>
          <span>Shop</span>
          <Link href="/category/all-products">All Products</Link>
          <Link href="/category/women">Women</Link>
          <Link href="/category/men">Men</Link>
          <Link href="/category/accessories">Accessories</Link>
        </div>
        <div><span>Help</span><a href="mailto:themaxoutshop@gmail.com">Contact Us</a></div>
        <div><span>Legal</span><a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a><a href="#">Refund Policy</a><a href="#">Accessibility Statement</a></div>
      </footer>
    </main>
  );
}
