import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart-link";
import { activeDrop, archiveCollections } from "@/lib/drop";

const america = archiveCollections.find((c) => c.slug === "america");
const core = archiveCollections.find((c) => c.slug === "core");
const coreHoodie = core?.products.find((p) => p.slug === "maxout-core-hoodie");
const americaTee = america?.products.find((p) => p.slug === "maxout-america-tee");

function Logo(){return <Link className="logo" href="/">MAXOUT</Link>}

export default function Home(){
  return <main>
    <header className="siteHeader shell">
      <Logo/>
      <nav className="desktopNav">
        <a href="#shop">SHOP</a>
        <a href="#collections">COLLECTIONS</a>
        <a href="#blackout">BLACKOUT</a>
        <CartLink/>
      </nav>
    </header>

    <section className="minimalHero">
      <div className="minimalHeroImage">
        {america?.image && <Image src={america.image} alt="MAXOUT apparel" fill priority sizes="100vw"/>}
      </div>
      <div className="minimalHeroCopy shell">
        <p>MAXOUT / 2026</p>
        <h1>BUILT FOR MORE.</h1>
        <Link href="#shop">SHOP NOW</Link>
      </div>
    </section>

    <section className="minimalProducts shell" id="shop">
      <div className="minimalSectionHead">
        <h2>Featured</h2>
        <Link href="/collections/core">View all</Link>
      </div>

      <div className="minimalProductGrid">
        {coreHoodie && <Link className="minimalProduct" href={"/products/"+coreHoodie.slug}>
          <div className="minimalProductImage">
            {coreHoodie.image && <Image src={coreHoodie.image} alt={coreHoodie.name} fill sizes="(max-width:900px) 100vw, 50vw"/>}
          </div>
          <div className="minimalProductMeta">
            <span>{coreHoodie.name}</span>
            <span>{"$"+coreHoodie.price.toFixed(2)}</span>
          </div>
        </Link>}

        {americaTee && <Link className="minimalProduct" href={"/products/"+americaTee.slug}>
          <div className="minimalProductImage">
            {americaTee.image && <Image src={americaTee.image} alt={americaTee.name} fill sizes="(max-width:900px) 100vw, 50vw"/>}
          </div>
          <div className="minimalProductMeta">
            <span>{americaTee.name}</span>
            <span>{"$"+americaTee.price.toFixed(2)}</span>
          </div>
        </Link>}
      </div>
    </section>

    <section className="minimalCollections shell" id="collections">
      <div className="minimalSectionHead">
        <h2>Collections</h2>
        <span>Archive</span>
      </div>

      <div className="minimalCollectionGrid">
        {archiveCollections.slice(0,4).map((collection)=>(
          <Link className="minimalCollection" href={"/collections/"+collection.slug} key={collection.slug}>
            <div className="minimalCollectionImage">
              {collection.image ? <Image src={collection.image} alt={collection.name} fill sizes="(max-width:900px) 100vw, 50vw"/> : <span>{collection.name}</span>}
            </div>
            <div className="minimalCollectionMeta">
              <h3>{collection.name}</h3>
              <span>Shop</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="blackoutMinimal" id="blackout">
      <div className="shell blackoutMinimalInner">
        <p>COMING NEXT</p>
        <h2>BLACKOUT</h2>
        <span>{activeDrop.subtitle}</span>
        <a href="#blackout-products">Preview drop</a>
      </div>

      <div className="shell blackoutMinimalGrid" id="blackout-products">
        {activeDrop.products.map((product)=>(
          <Link className="blackoutMinimalCard" href={"/products/"+product.slug} key={product.slug}>
            <div className="blackoutMinimalVisual">MAXOUT</div>
            <div className="minimalProductMeta">
              <span>{product.name}</span>
              <span>{"$"+product.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <footer className="minimalFooter shell">
      <Logo/>
      <div>
        <Link href="/collections/core">Shop</Link>
        <Link href="/collections/america">Collections</Link>
        <a href="mailto:themaxoutshop@gmail.com">Contact</a>
      </div>
      <span>© 2026 MAXOUT</span>
    </footer>
  </main>
}