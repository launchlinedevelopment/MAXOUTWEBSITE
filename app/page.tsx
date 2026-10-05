import Image from "next/image";
import Link from "next/link";
import CartLink from "@/components/cart-link";
import { activeDrop, archiveCollections } from "@/lib/drop";

const america = archiveCollections.find((c) => c.slug === "america");
const core = archiveCollections.find((c) => c.slug === "core");
const coreHoodie = core?.products.find((p) => p.slug === "maxout-core-hoodie");
const americaTee = america?.products.find((p) => p.slug === "maxout-america-tee");

function Logo() {
  return <Link className="logo" href="/">MAXOUT</Link>;
}

export default function Home() {
  return (
    <main>
      <div className="announcement">BLACKOUT DROP COMING SOON — LIMITED RELEASE</div>

      <header className="siteHeader shell">
        <button className="menuButton" aria-label="Open menu">MENU</button>
        <Logo />
        <nav className="desktopNav">
          <a href="#new">NEW</a>
          <a href="#collections">COLLECTIONS</a>
          <Link href="/collections/core">MEN</Link>
          <Link href="/collections/core">WOMEN</Link>
          <CartLink />
        </nav>
      </header>

      <section className="homeHero">
        <div className="heroImage">
          {america?.image && (
            <Image src={america.image} alt="MAXOUT apparel" fill priority sizes="100vw" />
          )}
        </div>
        <div className="heroOverlay">
          <p className="eyebrow">NEW DROP / 2026</p>
          <h1>BLACKOUT<br/>IS NEXT.</h1>
          <p className="heroSub">A new MAXOUT drop is coming. Built around the same idea: clothing made to be worn hard and worn often.</p>
          <a className="primaryButton" href="#new">EXPLORE MAXOUT</a>
        </div>
      </section>

      <section className="homeIntro shell">
        <p className="sectionLabel">MAXOUT / EST. 2026</p>
        <div>
          <h2>Built for More,<br/>Clothing built to last.</h2>
          <p>Essential pieces. Worn on repeat.</p>
          <Link className="textLink" href="/collections/core">SHOP ALL →</Link>
        </div>
      </section>

      <section className="featureProducts shell" id="new">
        <div className="sectionTitleRow">
          <h2>Featured</h2>
          <Link href="/collections/core">Shop All</Link>
        </div>

        <div className="featureGrid">
          {coreHoodie && (
            <Link className="featureCard large" href={"/products/" + coreHoodie.slug}>
              <div className="featureImage">
                {coreHoodie.image && <Image src={coreHoodie.image} alt={coreHoodie.name} fill sizes="(max-width:900px) 100vw, 60vw"/>}
              </div>
              <div className="featureMeta">
                <div><h3>{coreHoodie.name}</h3><p>{coreHoodie.statement}</p></div>
                <strong>{"$"+coreHoodie.price.toFixed(2)}</strong>
              </div>
            </Link>
          )}

          {americaTee && (
            <Link className="featureCard" href={"/products/" + americaTee.slug}>
              <div className="featureImage">
                {americaTee.image && <Image src={americaTee.image} alt={americaTee.name} fill sizes="(max-width:900px) 100vw, 40vw"/>}
              </div>
              <div className="featureMeta">
                <div><h3>{americaTee.name}</h3><p>{americaTee.statement}</p></div>
                <strong>{"$"+americaTee.price.toFixed(2)}</strong>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="blackoutTease">
        <div className="shell blackoutInner">
          <div>
            <p className="eyebrow light">COMING NEXT</p>
            <h2>BLACKOUT</h2>
          </div>
          <div className="blackoutCopy">
            <p>{activeDrop.manifesto}</p>
            <a href="#blackout-products">PREVIEW THE DROP →</a>
          </div>
        </div>

        <div className="blackoutProducts shell" id="blackout-products">
          {activeDrop.products.map((product) => (
            <Link className="blackoutCard" href={"/products/" + product.slug} key={product.slug}>
              <div className="blackoutVisual">
                <span>{product.number}</span>
                <b>MAXOUT</b>
              </div>
              <div className="blackoutMeta">
                <div><h3>{product.name}</h3><p>{product.category}</p></div>
                <strong>{"$"+product.price.toFixed(2)}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="collectionSection shell" id="collections">
        <div className="sectionTitleRow">
          <h2>The Collection</h2>
          <span>Explore MAXOUT</span>
        </div>

        <div className="collectionTiles">
          {archiveCollections.slice(0, 4).map((collection) => (
            <Link className="collectionTile" href={"/collections/" + collection.slug} key={collection.slug}>
              <div className="collectionTileImage">
                {collection.image ? (
                  <Image src={collection.image} alt={collection.name} fill sizes="(max-width:900px) 100vw, 50vw" />
                ) : (
                  <div className="collectionFallback">{collection.name}</div>
                )}
              </div>
              <div className="collectionTileText">
                <div><h3>{collection.name}</h3><p>{collection.subtitle}</p></div>
                <span>SHOP →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div className="shell newsletterInner">
          <div>
            <p className="sectionLabel">JOIN THE LIST</p>
            <h2>Early access.<br/>Private drops.<br/>No spam.</h2>
          </div>
          <form className="newsletterForm">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <div><input id="email" type="email" placeholder="you@email.com" /><button type="button">JOIN NOW</button></div>
            <p>Be first to hear about BLACKOUT and future MAXOUT drops.</p>
          </form>
        </div>
      </section>

      <footer className="siteFooter shell">
        <Logo />
        <div><p>SHOP</p><Link href="/collections/core">Core</Link><Link href="/collections/america">America</Link><a href="#blackout-products">Blackout</a></div>
        <div><p>HELP</p><a href="mailto:themaxoutshop@gmail.com">Contact Us</a><span>Shipping</span><span>Returns</span></div>
        <div><p>MAXOUT</p><span>© 2026 MAXOUT</span><span>Clothing built to last.</span></div>
      </footer>
    </main>
  );
}
