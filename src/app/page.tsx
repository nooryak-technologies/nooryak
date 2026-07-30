import HomeMain from "@/pages/homes/home/HomeMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nooryak Technologies",
  description: "Professional Web and App Development with Result-Oriented Digital Marketing Company",
  openGraph: {
    title: "Nooryak Technologies",
    description: "Professional Web and App Development with Result-Oriented Digital Marketing Company",
    url: "https://nooryak.com/",
    siteName: "Nooryak Technologies",
    images: [
      {
        url: "https://nooryak.com/assets/images/Product/share_linklogo.png",
        secureUrl: "https://nooryak.com/assets/images/Product/share_linklogo.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Nooryak Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nooryak Technologies",
    description: "Professional Web and App Development with Result-Oriented Digital Marketing Company",
    images: ["https://nooryak.com/assets/images/Product/share_linklogo.png"],
  },
  icons: {
    icon: "/assets/images/common/Logo.png",
  },
};

export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  );
}
