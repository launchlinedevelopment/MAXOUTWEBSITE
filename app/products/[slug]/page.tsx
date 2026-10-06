import { redirect } from "next/navigation";
export default async function OldProductRoute({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  redirect("/product-page/"+slug);
}