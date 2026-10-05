export type Product={slug:string;name:string;price:number;category:string;statement:string;number:string;accent:string};
export type Drop={id:string;eyebrow:string;title:string;subtitle:string;releaseLabel:string;manifesto:string;products:Product[]};

export const activeDrop:Drop={
  id:"blackout",
  eyebrow:"DROP 02 / 2026",
  title:"BLACKOUT",
  subtitle:"NO NOISE. NO EXCUSES.",
  releaseLabel:"THE NEW ERA OF MAXOUT",
  manifesto:"BLACKOUT strips everything back. Heavy silhouettes. Dark tones. Sharp details. Built for the days when talking means less than doing.",
  products:[
    {slug:"blackout-hoodie",name:"BLACKOUT Hoodie",price:68,category:"Heavyweight / Unisex",statement:"Built heavy. Worn harder.",number:"01",accent:"OVERSIZED"},
    {slug:"blackout-pants",name:"BLACKOUT Pants",price:58,category:"Heavyweight / Unisex",statement:"Cut for movement. Made to disappear.",number:"02",accent:"RELAXED"},
    {slug:"blackout-backpack",name:"BLACKOUT Backpack",price:52,category:"Utility / Everyday",statement:"Carry everything. Show nothing.",number:"03",accent:"UTILITY"}
  ]
};