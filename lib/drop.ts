export type Product={
  slug:string;
  name:string;
  price:number;
  originalPrice?:number;
  category:string;
  statement:string;
  number:string;
  accent:string;
  collection:string;
  image?:string;
  colors?:string[];
  sizes?:string[];
};

export type Collection={
  slug:string;
  name:string;
  subtitle:string;
  year:string;
  image?:string;
  products:Product[];
};

const wix={
  americaHero:"https://static.wixstatic.com/media/8255de_06d4a17a72a54f378299eefd86b5f5ff~mv2.png/v1/crop/x_0,y_46,w_2000,h_1072/fill/w_980,h_525,al_c,q_90,enc_auto/unisex-oversized-heavyweight-hoodie-vintage-black-front-69ea2cf73beab.png",
  americaGraphic:"https://static.wixstatic.com/media/8255de_46ca095df9194b7db0d25a0713924c4f~mv2.png/v1/fill/w_980,h_1307,al_c,q_90,enc_auto/image-v1523157514714288128_edited.png",
  coreHero:"https://static.wixstatic.com/media/8255de_9fda9e347bb34bdfbb55f12cd8e88524~mv2.png/v1/fill/w_980,h_980,al_c,q_90,enc_auto/unisex-oversized-heavyweight-hoodie-vintage-black-front-69ea3ea83ee96.png",
  accessory:"https://static.wixstatic.com/media/8255de_3dbcce34635c408dbaa7f4f48f3852f1~mv2.png/v1/fill/w_980,h_1026,al_c,q_90,enc_auto/8255de_3dbcce34635c408dbaa7f4f48f3852f1~mv2.png",
  women:"https://static.wixstatic.com/media/8255de_9a7428c19f2742929555264654e94f9e~mv2.png/v1/fill/w_980,h_980,al_c,q_90,enc_auto/all-over-print-leggings-white-left-front-69ea3fe1b0183.png",
  americaTee:"https://static.wixstatic.com/media/8255de_503a3a89ad9d4f31aa618a55f73c1d33~mv2.jpeg/v1/fill/w_1920,h_2560,al_c,q_90,enc_auto/8255de_503a3a89ad9d4f31aa618a55f73c1d33~mv2.jpeg",
  coreHoodie:"https://static.wixstatic.com/media/8255de_dcba6ed6532b4e198c7c34c77c6a3f7c~mv2.png/v1/fill/w_1400,h_1400,al_c,q_90,enc_auto/8255de_dcba6ed6532b4e198c7c34c77c6a3f7c~mv2.png"
};

export const activeDrop:Collection={
  slug:"blackout",
  name:"BLACKOUT",
  subtitle:"NO NOISE. NO EXCUSES.",
  year:"2026",
  products:[
    {slug:"blackout-hoodie",name:"BLACKOUT Hoodie",price:68,category:"Heavyweight / Unisex",statement:"Built heavy. Worn harder.",number:"01",accent:"OVERSIZED",collection:"blackout",sizes:["S","M","L","XL","2XL"]},
    {slug:"blackout-pants",name:"BLACKOUT Pants",price:58,category:"Heavyweight / Unisex",statement:"Cut for movement. Made to disappear.",number:"02",accent:"RELAXED",collection:"blackout",sizes:["S","M","L","XL","2XL"]},
    {slug:"blackout-backpack",name:"BLACKOUT Backpack",price:52,category:"Utility / Everyday",statement:"Carry everything. Show nothing.",number:"03",accent:"UTILITY",collection:"blackout",sizes:["ONE SIZE"]}
  ]
};

export const archiveCollections:Collection[]=[
  {
    slug:"america",name:"AMERICA",subtitle:"Built to represent.",year:"2026",image:wix.americaHero,
    products:[
      {slug:"maxout-america-tee",name:"MAXOUT America Tee",price:30,category:"America / Tee",statement:"Premium heavyweight cotton with the distressed MAXOUT America graphic.",number:"A1",accent:"HEAVYWEIGHT",collection:"america",image:wix.americaTee,colors:["Black Beauty","Army Green","Navy Blue"],sizes:["S","M","L","XL","2XL"]},
      {slug:"maxout-america-sweatpants",name:"MAXOUT America Sweatpants",price:45,category:"America / Bottoms",statement:"America drop sweatpants built for everyday wear.",number:"A2",accent:"RELAXED",collection:"america"},
      {slug:"maxout-america-crop-top",name:"MAXOUT America Crop Top",price:25,category:"America / Women",statement:"A cropped America drop essential.",number:"A3",accent:"CROPPED",collection:"america",image:wix.americaGraphic},
      {slug:"maxout-america-sports-bra",name:"MAXOUT America Sports Bra",price:30,category:"America / Women",statement:"Performance support from the America drop.",number:"A4",accent:"PERFORMANCE",collection:"america"}
    ]
  },
  {
    slug:"core",name:"CORE",subtitle:"Essential pieces. Worn on repeat.",year:"2026",image:wix.coreHero,
    products:[
      {slug:"maxout-core-hoodie",name:"MAXOUT Core Hoodie",price:55,category:"Core / Hoodie",statement:"Heavyweight fleece with an oversized fit and minimal front branding.",number:"C1",accent:"OVERSIZED",collection:"core",image:wix.coreHoodie,colors:["Black","Navy Blue"],sizes:["S","M","L","XL","2XL","3XL"]},
      {slug:"maxout-core-tee",name:"MAXOUT Core Tee",price:35,originalPrice:40,category:"Core / Tee",statement:"A daily MAXOUT essential.",number:"C2",accent:"CORE",collection:"core"},
      {slug:"maxout-core-joggers",name:"MAXOUT Core Joggers",price:33,category:"Core / Bottoms",statement:"Everyday joggers built for repeat wear.",number:"C3",accent:"EVERYDAY",collection:"core"},
      {slug:"maxout-core-pants",name:"MAXOUT Core Pants",price:40.59,category:"Core / Bottoms",statement:"Clean everyday pants from the Core collection.",number:"C4",accent:"CORE",collection:"core"},
      {slug:"maxout-core-compression-shirt",name:"MAXOUT Core Compression Shirt",price:28.5,category:"Core / Performance",statement:"Compression fit for training.",number:"C5",accent:"COMPRESSION",collection:"core"},
      {slug:"maxout-core-long-sleeve",name:"MAXOUT Core Long Sleeve",price:29.5,category:"Core / Tops",statement:"Long-sleeve Core layer.",number:"C6",accent:"LAYER",collection:"core"},
      {slug:"maxout-core-muscle-tank",name:"MAXOUT Core Muscle Tank",price:27.33,category:"Core / Training",statement:"Training-first muscle tank.",number:"C7",accent:"TRAINING",collection:"core"},
      {slug:"maxout-core-racerback-tank",name:"MAXOUT Core Racerback Tank",price:24,category:"Core / Women",statement:"Racerback training tank.",number:"C8",accent:"RACERBACK",collection:"core"},
      {slug:"maxout-core-sports-bra",name:"MAXOUT Core Sports Bra",price:27.96,category:"Core / Women",statement:"Core performance sports bra.",number:"C9",accent:"PERFORMANCE",collection:"core"},
      {slug:"maxout-core-leggings",name:"MAXOUT Core Leggings",price:30,category:"Core / Women",statement:"Core leggings for training and everyday wear.",number:"C10",accent:"PERFORMANCE",collection:"core",image:wix.women},
      {slug:"maxout-core-shaker",name:"MAXOUT Core Shaker",price:24,category:"Core / Accessories",statement:"MAXOUT shaker for training days.",number:"C11",accent:"ACCESSORY",collection:"core",image:wix.accessory}
    ]
  },
  {
    slug:"summer",name:"SUMMER",subtitle:"Lighter weight. Same mentality.",year:"2026",
    products:[
      {slug:"maxout-summer-tee",name:"MAXOUT Summer Tee",price:23.2,originalPrice:29,category:"Summer / Tee",statement:"Summer-weight MAXOUT tee.",number:"S1",accent:"SUMMER",collection:"summer"},
      {slug:"maxout-summer-tank",name:"MAXOUT Summer Tank",price:22.4,originalPrice:28,category:"Summer / Tank",statement:"Built for heat and training.",number:"S2",accent:"LIGHTWEIGHT",collection:"summer"},
      {slug:"maxout-summer-shorts",name:"MAXOUT Summer Shorts",price:20,originalPrice:25,category:"Summer / Shorts",statement:"Lightweight summer shorts.",number:"S3",accent:"LIGHTWEIGHT",collection:"summer"}
    ]
  },
  {
    slug:"apex",name:"APEX",subtitle:"Push past average.",year:"2026",
    products:[
      {slug:"maxout-apex-hoodie",name:"MAXOUT Apex Hoodie",price:57.94,category:"Apex / Hoodie",statement:"A heavier statement piece from the Apex collection.",number:"X1",accent:"APEX",collection:"apex"},
      {slug:"maxout-apex-tee",name:"MAXOUT Apex Tee",price:35,category:"Apex / Tee",statement:"The Apex graphic tee.",number:"X2",accent:"APEX",collection:"apex"}
    ]
  }
];

export const allProducts=[...activeDrop.products,...archiveCollections.flatMap(c=>c.products)];
export const allCollections=[activeDrop,...archiveCollections];

export function getProduct(slug:string){return allProducts.find(p=>p.slug===slug)}
export function getCollection(slug:string){return allCollections.find(c=>c.slug===slug)}
