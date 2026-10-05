"use client";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
export default function CartLink(){const {count}=useCart();return <Link className="cart" href="/cart">CART / {count}</Link>}