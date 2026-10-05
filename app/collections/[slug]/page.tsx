import Image from "next/image";
import Link from "next/link";
import { allCollections, getCollection } from "@/lib/drop";

export function generateStaticParams(){return allCollections.map((c)=>({slug:c.slug}))}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const collection=getCollection(slug);
  if(!collection)return {};
  return {
    title: collection.name+" Collection",
    description: collection.subtitle+" Shop the MAXOUT "+collection.name+" collection."
  };
}

export default async function CollectionPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const collection=getCollection(slug);
  if(!collection)return null;

  return <main>
    <nav className="nav shell"><Link className="mark" href="/">MAX<span>OUT</span></Link><Link href="/#archive">← ALL DROPS</Link></nav>

    <section className="collectionHero shell">
      <div className="kicker">[ MAXOUT ARCHIVE / {collection.year} ]</div>
      <div className="collectionTitle">
        <h1>{collection.name}</h1>
        <p>{collection.subtitle}</p>
      </div>
      {collection.image && <div className="collectionCover"><Image src={collection.image} alt={collection.name+" collection"} fill priority sizes="100vw"/></div>}
    </section>

    <section className="collectionProducts shell">
      <header className="sectionHead"><span>{collection.name} COLLECTION</span><span>{String(collection.products.length).padStart(2,"0")} ITEMS</span></header>
      <div className="archiveProductGrid">
        {collection.products.map((p)=>(
          <Link className="archiveProduct" href={"/products/"+p.slug} key={p.slug}>
            <div className="archiveProductVisual">
              {p.image ? <Image src={p.image} alt={p.name} fill sizes="(max-width: 900px) 100vw, 33vw"/> : <div className="archiveProductType">MAXOUT</div>}
              {p.originalPrice && <span className="saleTag">SALE</span>}
            </div>
            <div className="archiveProductMeta">
              <div><h2>{p.name}</h2><p>{p.category}</p></div>
              <div className="archivePrice">{p.originalPrice && <del>{"$"+p.originalPrice.toFixed(2)}</del>}<strong>{"$"+p.price.toFixed(2)}</strong></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </main>
}