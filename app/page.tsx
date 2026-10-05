import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart-link";
import { activeDrop, archiveCollections } from "@/lib/drop";
import styles from "./home.module.css";

const america = archiveCollections.find((c) => c.slug === "america");
const core = archiveCollections.find((c) => c.slug === "core");
const featured = [
  core?.products.find((p) => p.slug === "maxout-core-hoodie"),
  america?.products.find((p) => p.slug === "maxout-america-tee"),
].filter(Boolean);

export default function Home(){
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">MAXOUT</Link>
        <nav className={styles.nav}>
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#blackout">Blackout</a>
          <CartLink/>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p>MAXOUT / 2026</p>
          <h1>BUILT FOR<br/>MORE.</h1>
          <span>Clothing built to last.</span>
          <a href="#shop">Shop now</a>
        </div>
        <div className={styles.heroProduct}>
          {featured[0]?.image && (
            <Image
              src={featured[0].image}
              alt={featured[0].name}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          )}
        </div>
      </section>

      <section className={styles.section} id="shop">
        <div className={styles.sectionHead}>
          <h2>Featured</h2>
          <Link href="/collections/core">View all</Link>
        </div>
        <div className={styles.products}>
          {featured.map((product) => product && (
            <Link className={styles.product} href={"/products/"+product.slug} key={product.slug}>
              <div className={styles.productImage}>
                {product.image && <Image src={product.image} alt={product.name} fill sizes="(max-width:800px) 100vw, 50vw"/>}
              </div>
              <div className={styles.productInfo}>
                <span>{product.name}</span>
                <span>{"$"+product.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section} id="collections">
        <div className={styles.sectionHead}>
          <h2>Collections</h2>
          <span>Archive</span>
        </div>
        <div className={styles.collections}>
          {archiveCollections.slice(0,4).map((collection)=>(
            <Link className={styles.collection} href={"/collections/"+collection.slug} key={collection.slug}>
              <div className={styles.collectionImage}>
                {collection.image ? (
                  <Image src={collection.image} alt={collection.name} fill sizes="(max-width:800px) 100vw, 50vw"/>
                ) : (
                  <span>{collection.name}</span>
                )}
              </div>
              <div className={styles.collectionInfo}>
                <h3>{collection.name}</h3>
                <span>Shop</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.blackout} id="blackout">
        <div className={styles.blackoutTop}>
          <div>
            <p>COMING NEXT</p>
            <h2>BLACKOUT</h2>
          </div>
          <div className={styles.blackoutCopy}>
            <span>{activeDrop.subtitle}</span>
            <p>{activeDrop.manifesto}</p>
          </div>
        </div>
        <div className={styles.blackoutGrid}>
          {activeDrop.products.map((product)=>(
            <Link href={"/products/"+product.slug} className={styles.blackoutCard} key={product.slug}>
              <div className={styles.blackoutVisual}>MAXOUT</div>
              <div className={styles.blackoutMeta}>
                <span>{product.name}</span>
                <span>{"$"+product.price.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.logo} href="/">MAXOUT</Link>
        <div>
          <Link href="/collections/core">Shop</Link>
          <Link href="/collections/america">Collections</Link>
          <a href="mailto:themaxoutshop@gmail.com">Contact</a>
        </div>
        <span>© 2026 MAXOUT</span>
      </footer>
    </main>
  );
}