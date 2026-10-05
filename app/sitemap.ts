import { MetadataRoute } from "next";
import { activeDrop } from "@/lib/drop";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{url:"https://maxoutshop.com",changeFrequency:"weekly",priority:1},...activeDrop.products.map((p)=>({url:"https://maxoutshop.com/products/"+p.slug,changeFrequency:"weekly" as const,priority:.8}))];
}