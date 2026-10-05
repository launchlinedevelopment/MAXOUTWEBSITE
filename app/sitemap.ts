import { MetadataRoute } from "next";
import { allCollections, allProducts } from "@/lib/drop";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {url:"https://maxoutshop.com",changeFrequency:"weekly",priority:1},
    ...allCollections.map(c=>({url:"https://maxoutshop.com/collections/"+c.slug,changeFrequency:"weekly" as const,priority:.8})),
    ...allProducts.map(p=>({url:"https://maxoutshop.com/products/"+p.slug,changeFrequency:"weekly" as const,priority:.8}))
  ];
}