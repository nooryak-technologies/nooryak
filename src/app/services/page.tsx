import { Metadata } from "next";
import ServiceMain from "@/components/services/ServiceMain";
import "./service.scss";

export const metadata: Metadata = {
  title: "Services - Nooryak Technologies",
  description: "Explore our core digital services designed to improve visibility, engagement, conversions, and long-term business growth.",
};

export default function Services() {
  return <ServiceMain />;
}

