import Link from "next/link";
import { activeDrop } from "@/lib/drop";
import CartLink from "@/components/cart-link";

function Mark(){return <div className="mark">MAX<span>OUT</span></div>}

export default function Home(){
  return <main>
    <section className="hero">
      <nav className="nav shell">
        <Mark/>
        <div className="navLinks"><a href="#drop">DROP</a><a href="#story">STORY</a><CartLink/></div>
      </nav>
      <div className="heroNoise"/>
      <div className="heroGrid shell">
        <div className="heroMeta"><span>{activeDrop.eyebrow}</span><span>MAXOUT® / NEW JERSEY</span></div>
        <div className="heroWord">BLACK<br/><span>OUT</span></div>
        <div className="heroBottom"><p>{activeDrop.subtitle}</p><a className="circleLink" href="#drop">↓</a></div>
      </div>
    </section>

    <section className="ticker"><div>{Array.from({length:8}).map((_,i)=><span key={i}>BLACKOUT / MAXOUT / GO ALL IN / </span>)}</div></section>

    <section className="intro shell" id="story">
      <div className="kicker">[ {activeDrop.releaseLabel} ]</div>
      <h1>YOU DON&apos;T NEED<br/>MORE <em>NOISE.</em></h1>
      <div className="introCopy"><p>{activeDrop.manifesto}</p><span>EST. 2026 — MAXOUT WORLDWIDE</span></div>
    </section>

    <section className="products shell" id="drop">
      <header className="sectionHead"><span>THE BLACKOUT DROP</span><span>{String(activeDrop.products.length).padStart(2,"0")} PIECES</span></header>
      <div className="productGrid">
        {activeDrop.products.map((p)=><Link className="productCard" href={"/products/"+p.slug} key={p.slug}>
          <div className="productVisual"><span className="productNumber">{p.number}</span><span className="productAccent">{p.accent}</span><div className="ghostType">MAXOUT</div></div>
          <div className="productInfo"><div><h2>{p.name}</h2><p>{p.category}</p></div><strong>{"$"+p.price}</strong></div>
        </Link>)}
      </div>
    </section>

    <section className="statement"><div className="shell statementInner">
      <div className="statementTop"><span>MAXOUT®</span><span>BLACKOUT / 2026</span></div>
      <p>IF YOU&apos;RE<br/>GOING TO DO IT,<br/><b>MAX IT OUT.</b></p>
    </div></section>

    <footer className="footer shell">
      <Mark/>
      <div><p>MAXOUT WORLDWIDE</p><p>ESTABLISHED 2026</p></div>
      <div><a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a><a href="https://tiktok.com" target="_blank" rel="noreferrer">TIKTOK</a></div>
    </footer>
  </main>
}