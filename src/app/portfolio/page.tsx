import { Metadata } from "next";
import PortfolioMain from "./PortfolioMain";
import "./portfolio.scss";

export const metadata: Metadata = {
  title: "Portfolio - Nooryak Technologies",
  description: "Explore our collection of recent works including design, development, and digital marketing problem-solving.",
};

export default function PortfolioPage() {
  return <PortfolioMain />;
}
