import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://reliefcheck.com"),
  title: {
    default: "ReliefCheck — See How Much You Could Save on Your Debt",
    template: "%s | ReliefCheck",
  },
  description:
    "Free debt relief calculator and comparison tool. See your estimated savings in 60 seconds. Compare top-rated debt relief companies with honest, independent reviews.",
  keywords: [
    "debt relief",
    "debt settlement",
    "debt relief companies",
    "debt calculator",
    "credit card debt help",
    "debt consolidation",
    "best debt relief",
  ],
  openGraph: {
    type: "website",
    siteName: "ReliefCheck",
    title: "ReliefCheck — See How Much You Could Save on Your Debt",
    description:
      "Free debt relief calculator and comparison tool. See your estimated savings in 60 seconds.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReliefCheck — Free Debt Relief Calculator",
    description:
      "See how much you could save on your debt. Compare top-rated companies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ReliefCheck",
              url: "https://reliefcheck.com",
              description: "Free debt relief comparison and calculator tool",
              logo: "https://reliefcheck.com/logo.png",
            }),
          }}
        />
      </head>
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
