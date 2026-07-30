import { Inter, Besley, Space_Grotesk, Playfair_Display, Satisfy, Teko, Phudu, Poppins, Onest } from "next/font/google";
import { AnalyticsTracker } from '@/components/common/AnalyticsTracker';
import GlobalVideoModal from "@/components/Popup/GlobalVideoModal";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import Wrapper from "@/layouts/wrapper";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";
import HeaderFooterWrapper from "@/components/layout/HeaderFooterWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const besley = Besley({
  subsets: ["latin"],
  variable: "--font-besley",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const satisfy = Satisfy({
  subsets: ["latin"],
  variable: "--font-satisfy",
  weight: "400",
  display: "swap",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const phudu = Phudu({
  subsets: ["latin"],
  variable: "--font-phudu",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nooryak.com"),
  title: {
    default: "Nooryak Technologies",
    template: "%s - Nooryak Technologies",
  },
  description: "Professional Web and App Development with Result-Oriented Digital Marketing Company",
  openGraph: {
    title: "Nooryak Technologies",
    description: "Professional Web and App Development with Result-Oriented Digital Marketing Company",
    url: "https://nooryak.com/",
    siteName: "Nooryak Technologies",
    images: [
      {
        url: "/assets/images/Product/share_linklogo.png",
        width: 1200,
        height: 630,
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
    images: ["/assets/images/Product/share_linklogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="agntix-light">
      <head suppressHydrationWarning={true}>
        <link rel="icon" href="/assets/images/common/Logo-blue.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        
        {/* OpenGraph Meta Tags for Link Previews (WhatsApp, Telegram, Facebook, Twitter, iMessage) */}
        <meta property="og:title" content="Nooryak Technologies" />
        <meta property="og:description" content="Professional Web and App Development with Result-Oriented Digital Marketing Company" />
        <meta property="og:image" content="https://nooryak.com/assets/images/Product/share_linklogo.png" />
        <meta property="og:url" content="https://nooryak.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nooryak Technologies" />
        <meta name="twitter:description" content="Professional Web and App Development with Result-Oriented Digital Marketing Company" />
        <meta name="twitter:image" content="https://nooryak.com/assets/images/Product/share_linklogo.png" />
      </head>
      <body suppressHydrationWarning={true} className={`tp-magic-cursor ${inter.variable}
     ${besley.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}
      ${satisfy.variable} ${teko.variable} ${phudu.variable} ${poppins.variable}
       ${onest.variable}`}>
        <AnalyticsTracker />
        <AppProvider>
          <Wrapper>
            <VideoProvider>
              <HeaderFooterWrapper>
                {children}
              </HeaderFooterWrapper>
            </VideoProvider>
            <GlobalVideoModal />
          </Wrapper>
        </AppProvider>
      </body>
    </html>
  );
}