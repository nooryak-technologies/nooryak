import { Metadata } from "next";
import DigitalMarketing from "@/app/services/digital-marketing/DigitalMarketing";

export const metadata: Metadata = {
  title: "Digital Marketing Services - Nooryak Technologies",
  description:
    "Data-driven digital marketing strategies that boost online visibility, generate quality leads, and drive long-term business growth across every digital channel.",
};

export default function DigitalMarketingSubmenuPage() {
  return <DigitalMarketing />;
}
