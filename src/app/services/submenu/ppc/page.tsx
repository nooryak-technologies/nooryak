import { Metadata } from "next";
import Payperclick from "../Payperclick";

export const metadata: Metadata = {
  title: "Pay-Per-Click (PPC) Services - Nooryak Technologies",
  description:
    "Drive instant traffic and maximize ROI with data-driven PPC advertising. Google Ads, Facebook Ads, Display & Remarketing campaigns that convert.",
};

export default function PPCPage() {
  return <Payperclick />;
}
