import { Metadata } from "next";
import DigitalMarketing from "./DigitalMarketing";

export const metadata: Metadata = {
  title: "Digital Marketing Services - Nooryak Technologies",
  description:
    "Data-driven digital marketing strategies that boost online visibility, generate quality leads, and drive long-term business growth across every digital channel.",
  keywords: "digital marketing, SEO, social media marketing, content marketing, PPC, online marketing, Nooryak Technologies",
};

export default function DigitalMarketingPage() {
  return <DigitalMarketing />;
}
