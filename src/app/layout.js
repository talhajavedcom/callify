import './globals.css';
import Header from '@/theme/header/Header';
import Footer from '@/theme/footer/Footer';
import PreFooter from '@/theme/pre-footer/PreFooter';

export const metadata = {
  title: {
    default: 'Callify | Automated Order Verification Calls',
    template: '%s | Callify',
  },
  description:
    'Callify helps Shopify and WooCommerce stores reduce fake orders and boost delivery success with smart, automated order verification voice calls in Pakistan.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen font-body antialiased">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
        <PreFooter />
        <Footer />
      </body>
    </html>
  );
}
