import { Metadata } from "next";
import ProductsSection from "@/components/products/ProductsSection";

export const metadata: Metadata = {
  title: "Products - Nooryak Technologies",
  description: "Explore Powerful SaaS Products by Nooryak Technologies built to simplify and scale your business: Launchshop eCommerce Store Builder, Nooryak CRM, SaaS Billing & POS, SaaS Reselling, and Website Builder.",
};

export default function ProductsPage() {
  return <ProductsSection />;
}
