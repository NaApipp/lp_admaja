import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GallerySection from "./GallerySection";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="flex-1 pt-16">
        <GallerySection />
      </main>

      <Footer />
    </>
  );
}